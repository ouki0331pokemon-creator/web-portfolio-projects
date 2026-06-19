import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname);
const output = resolve(root, "dist");

const publicFiles = [
  "_redirects",
  "index.html",
  "privacy.html",
  "thanks.html",
  "style.css",
  "script.js",
];

const publicDirectories = ["images", "projects"];

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of publicFiles) {
  const source = resolve(root, file);
  if (!existsSync(source)) throw new Error(`Missing public file: ${file}`);
  cpSync(source, resolve(output, file));
}

for (const directory of publicDirectories) {
  const source = resolve(root, directory);
  if (!existsSync(source)) throw new Error(`Missing public directory: ${directory}`);
  cpSync(source, resolve(output, directory), { recursive: true });
}

console.log("Created dist with public site files only.");
