// Builds the site into dist/: index.html + any root image assets (avatar.png etc).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(dist, "index.html"));

// Ship every png/jpg/gif/webp sitting in the repo root (e.g. avatar.png).
const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp"]);
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isFile() && IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
    fs.copyFileSync(path.join(root, entry.name), path.join(dist, entry.name));
    console.log("  + asset:", entry.name);
  }
}

console.log("Built static site into dist/");
