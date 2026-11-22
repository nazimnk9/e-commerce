import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import rawPageIndex from "@/lib/page-index.json";
import type { PageMeta } from "@/lib/types";

const pageIndex = rawPageIndex as Record<string, PageMeta>;

// Render template pages on demand instead of pre-rendering 127 copies of the
// theme markup. This keeps the Vercel static-file payload small while the
// content is traced into the route bundle (see next.config.ts).
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageIndex[slug];
  return {
    title: page ? page.title : "Multikart - Multi-purpose E-commerce Html Template",
    description: "multikart",
  };
}

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pageIndex[slug]) notFound();
  let body = "";
  try {
    body = await fs.readFile(path.join(process.cwd(), "content", "pages", `${slug}.html`), "utf8");
  } catch {
    notFound();
  }
  return (
    <main className="theme-page">
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </main>
  );
}