export async function POST(request) {
    try {
        const body = await request.json();

        const { recaptchaToken, ...crmPayload } = body;

        if (!recaptchaToken) {
            return Response.json({ success: false, message: "Captcha token missing." }, { status: 400 });
        }

        const verifyRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    secret: process.env.RECAPTCHA_SECRET_KEY,
                    response: recaptchaToken,
                }),
            }
        );

        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return Response.json({
                success: false,
                message: "Captcha verification failed.",
                errors: verifyData["error-codes"] || [],
            }, { status: 400 });
        }

        const origin = new URL(request.url).origin;

        const crmRes = await fetch(`${origin}/api/crm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(crmPayload),
        });

        const crmText = await crmRes.text();

        let crmData;

        try {
            crmData = JSON.parse(crmText);
        } catch {
            crmData = {
                success: crmRes.ok,
                message: crmText || "CRM response is not JSON.",
            };
        }

        if (!crmRes.ok) {
            return Response.json({
                success: false,
                message: crmData?.message || "CRM submission failed.",
                crmData,
            }, { status: crmRes.status });
        }

        return Response.json(crmData, { status: crmRes.status });
    } catch (error) {
        console.log("captcha-crm error:", error);

        return Response.json({ success: false, message: "Server error." }, { status: 500 });
    }
}
