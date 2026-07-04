import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const nextDir = resolve('.next');

try {
  await rm(nextDir, { recursive: true, force: true });
  console.log('Cleaned .next cache');
} catch (error) {
  console.error('Failed to clean .next cache');
  console.error(error);
  process.exitCode = 1;
}
