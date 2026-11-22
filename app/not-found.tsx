import fs from "node:fs";
import path from "node:path";

export const metadata = {
  title: "404 - Multikart",
};

export default function NotFound() {
  let body = "";
  try {
    body = fs.readFileSync(path.join(process.cwd(), "content", "pages", "404.html"), "utf8");
  } catch (error) {
    body = '<div class="container section-b-space"><h1>404 page not found</h1></div>';
  }
  return (
    <main className="theme-page">
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </main>
  );
}