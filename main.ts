// Entry program for makefun-x-reposts-02. Node 22, standard library only.
// Its single job: place the repository's POSTS.json into the directory the
// grader reads, so the house can check the X posts named there. The house
// writes posts.counts.json itself after this program runs; we never do.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output. Locally we point them at
// this repository and a scratch output directory.
const sourceDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const listPath = join(sourceDir, 'POSTS.json');
const destPath = join(outputDir, 'POSTS.json');

// Fail early when the list is malformed rather than shipping a broken entry.
function readAndCheckList(path: string): string {
  const text = readFileSync(path, 'utf8');
  if (text.length > 16384) {
    throw new Error('POSTS.json exceeds the 16384 byte cap');
  }
  const parsed: unknown = JSON.parse(text);
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('POSTS.json must be an object');
  }
  const posts = (parsed as { posts?: unknown }).posts;
  if (!Array.isArray(posts) || posts.length < 1 || posts.length > 15) {
    throw new Error('POSTS.json posts must hold between 1 and 15 addresses');
  }
  const address = /^https?:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/(?:i\/web\/status\/\d+|\w+\/status\/\d+)$/;
  for (const item of posts) {
    if (typeof item !== 'string' || !address.test(item.split(/[?#]/, 1)[0])) {
      throw new Error(`bad post address: ${String(item)}`);
    }
  }
  return text;
}

try {
  const bytes = readAndCheckList(listPath);
  mkdirSync(outputDir, { recursive: true });
  // Write from what we read: no reliance on further network or filesystem
  // state, so two runs in a row produce the same bytes.
  writeFileSync(destPath, bytes, 'utf8');
  console.log(`POSTS.json copied to ${destPath}`);
} catch (error) {
  console.error(`Could not prepare POSTS.json: ${(error as Error).message}`);
  process.exitCode = 1;
}
