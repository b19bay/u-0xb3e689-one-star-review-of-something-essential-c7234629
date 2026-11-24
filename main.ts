import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Sleep promises eight hours of rest and delivers a 3 a.m. review of every decision I have ever made.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (REVIEW.length < 1 || REVIEW.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${REVIEW.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW, "utf8");
