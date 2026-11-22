import fs from "node:fs";
import path from "node:path";

export default function ThemeSettings() {
  let markup = "";
  try {
    markup = fs.readFileSync(path.join(process.cwd(), "content", "theme-settings.html"), "utf8");
  } catch (error) {
    return null;
  }
  return <div className="mk-theme-settings" dangerouslySetInnerHTML={{ __html: markup }} />;
}