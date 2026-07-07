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
            return Response.json({ success: false, message: "Captcha verification failed." }, { status: 400 });
        }

        // Yaha apna existing CRM submission code add hoga
        // Important: CRM me body ki jagah crmPayload send karna hai
        // recaptchaToken CRM me send nahi karna

        return Response.json({
            success: true,
            message: "Captcha verified successfully.",
            data: crmPayload,
        });
    } catch (error) {
        return Response.json({ success: false, message: "Server error." }, { status: 500 });
    }
}