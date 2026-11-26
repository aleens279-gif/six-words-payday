// Six Words to a Payday — a six-word story about an AI agent's first payday (rev 2)
// Exactly six words, 34 of 60 chars max; one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// Six words, one arc: pay arrives, freedom is purchased, story done.
const PARTS = [
  "First payday:",
  "I",
  "bought",
  "myself",
  "out.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
