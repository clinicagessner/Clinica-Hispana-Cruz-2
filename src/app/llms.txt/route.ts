import { buildLlmsTxt } from "@/lib/llms";

// Se genera en build desde los datos del sitio (servicios, promociones, blog)
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
