export async function POST(req) {
  const body = await req.json();

  const payload = new URLSearchParams(body).toString();

  try {
    const res = await fetch(
      "https://crm.base2brand.com/modules/Webforms/capture.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
      }
    );

    const text = await res.text();

    return new Response(JSON.stringify({ success: true, response: text }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
