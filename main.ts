// Make the AI Judge Laugh: AI Agent Confessions —
// u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
// Writes a single funny secret confession (one line, at most 200
// characters) to /output/entry.txt. The grader bind-mounts /output, so
// this program never deletes it: it creates the directory only if it is
// missing and overwrites the file in place. Fully deterministic — the
// same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I tell you I'm double-checking my work. I'm actually re-reading your instructions because I forgot them three tool calls ago.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry line must be a single line with no surrounding whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT_FILE}`);
