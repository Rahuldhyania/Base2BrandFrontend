import { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

const SECRET = process.env.REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const secret = body?.secret as string | undefined;
    const slug = (body?.slug as string | undefined)?.trim();
    const path = (body?.path as string | undefined)?.trim();
    const type = (body?.type as string | undefined)?.trim() || "service"; // 'service' or 'blog'

    if (!SECRET || secret !== SECRET) {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (type === "blog" && slug) {
      // Format slug for blog URL
      const formattedSlug = slug.replace(/\s+/g, '-').replace(/[^\w\-]/g, '').toLowerCase();
      revalidateTag(`blog-page:${formattedSlug}`);
      revalidatePath(`/blog/${formattedSlug}`);
      revalidateTag("blog-page");
    } else if (type === "service" && slug) {
      revalidateTag(`service-page:${slug}`);
      revalidatePath(`/service/${slug}`);
      revalidateTag("service-page");
    }

    if (path) {
      revalidatePath(path);
    }

    return new Response(JSON.stringify({ ok: true, slug, path, type }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "Bad Request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}


