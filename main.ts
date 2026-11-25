import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, at most 200 characters: the single sentence that could
// have replaced an entire pointless meeting. v2: sharper angle — the
// meeting's only decision was to book another meeting to decide
// what this one didn't.
const ENTRY =
  "After an hour, the only decision we made was to schedule another meeting to decide what we didn't decide.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
