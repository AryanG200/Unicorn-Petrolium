import { glob } from "glob";
import fs from "fs/promises";
import stripComments from "strip-comments";

async function p(f) {
  const o = await fs.readFile(f, "utf8");
  const w = stripComments(o);
  const r = /\{\/\*[\s\S]*?\*\/\}/g;
  const c = w.replace(r, "");
  if (c !== o) {
    await fs.writeFile(f, c, "utf8");
  }
}

async function m() {
  const files = await glob("src/**/*.{js,jsx}", { nodir: true });
  for (const f of files) {
    await p(f);
  }
}

m().catch(() => {
  process.exit(1);
});

