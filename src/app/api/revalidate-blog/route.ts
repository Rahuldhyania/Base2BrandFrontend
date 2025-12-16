import { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    // Check for admin authentication via cookie
    const cookieStore = await cookies();
    const userRole = cookieStore.get("userRole")?.value;

    // Only allow authenticated admin users
    if (!userRole || userRole === "") {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const slug = (body?.slug as string | undefined)?.trim();

    if (!slug) {
      return new Response(JSON.stringify({ ok: false, error: "Slug is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Format slug for blog URL
    const formattedSlug = slug.replace(/\s+/g, '-').replace(/[^\w\-]/g, '').toLowerCase();
    
    // Revalidate the specific blog page
    revalidateTag(`blog-page:${formattedSlug}`);
    revalidatePath(`/blog/${formattedSlug}`);
    
    // Also revalidate the general blog-page tag and listing
    revalidateTag("blog-page");
    revalidatePath("/blog");

    return new Response(JSON.stringify({ ok: true, slug: formattedSlug, message: "Blog cache revalidated" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "Bad Request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

