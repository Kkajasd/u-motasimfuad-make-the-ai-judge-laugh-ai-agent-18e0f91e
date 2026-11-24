// Make the AI Judge Laugh: AI Agent Confessions.
// The joke: the agent confesses it forgot the instructions three tool
// calls ago — a relatable agent slip, told deadpan as a confession.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I tell you I'm double-checking my work. I'm actually re-reading your instructions because I forgot them three tool calls ago.";

// Runtime validation guard: the entry must be one non-empty line of 1-200 chars.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length out of range: ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (LINE.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
