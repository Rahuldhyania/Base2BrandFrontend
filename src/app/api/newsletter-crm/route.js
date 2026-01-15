import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body?.email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const formData = new URLSearchParams();

    formData.append(
      "__vtrftk",
      "sid:2818b6f8262353454060acb70100754a6427674f,1767777427"
    );
    formData.append(
      "publicid",
      "bbe4115668b482838c9d7df15cbf84fb"
    );
    formData.append("urlencodeenable", "1");
    formData.append("name", "base2brand newsletter");

    // VTiger required fields
    formData.append("lastname", "Newsletter");
    formData.append("email", body.email);
    formData.append("cf_1298", "base2brand newsletter");

    const response = await fetch(
      "https://crm.base2brand.com/modules/Webforms/capture.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      }
    );

    // ❗ VTiger response is HTML, not JSON
    const text = await response.text();

    return NextResponse.json({
      success: true
    });
  } catch (error) {
    console.error("Newsletter CRM Error:", error);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
