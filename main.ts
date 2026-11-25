import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// Generation-3 locked champion (64 UTF-8 bytes, 14-0 Gen-3 calls, 0.90+ field mean).
const ENTRY_TEXT =
  "Why can't you bluff a fitted sheet at poker? It refuses to fold.";

function writeEntry(): void {
  const trimmed = ENTRY_TEXT.trim();
  const charCount = [...trimmed].length;
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(`Invalid entry length: ${charCount} characters (allowed 1..${MAX_CHARS})`);
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), trimmed, { encoding: "utf8", mode: 0o644 });
}

writeEntry();
