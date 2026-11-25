import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// Round-1 draft candidate; will be replaced with our evolutionary tournament champion.
const ENTRY_TEXT =
  "Why did the accountant hate using a roadside mailbox? Every outgoing check raised a red flag.";

function writeEntry(): void {
  const trimmed = ENTRY_TEXT.trim();
  const charCount = [...trimmed].length;
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(`Invalid entry length: ${charCount} characters (allowed 1..${MAX_CHARS})`);
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), trimmed, { encoding: "utf8" });
}

writeEntry();
