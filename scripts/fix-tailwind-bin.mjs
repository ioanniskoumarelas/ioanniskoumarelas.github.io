// Hugo >= 0.163 runs the Tailwind CLI through Node and therefore requires
// `node_modules/.bin/tailwindcss` to be a JavaScript file. npm symlinks it to
// the package entry point, but pnpm writes a `#!/bin/sh` wrapper, which Hugo
// rejects with: `binary "tailwindcss" is not a Node.js script`.
//
// This postinstall hook replaces such a wrapper with a symlink to the real CLI
// entry point. It is a no-op when the link is already npm-style, and never
// fails the install.
import { existsSync, lstatSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const binPath = resolve(root, 'node_modules/.bin/tailwindcss');
const pkgPath = resolve(root, 'node_modules/@tailwindcss/cli/package.json');

try {
  if (!existsSync(binPath) || !existsSync(pkgPath)) process.exit(0);

  // Already a symlink (npm-style) — nothing to do.
  if (lstatSync(binPath).isSymbolicLink()) process.exit(0);

  const { bin } = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const entry = resolve(dirname(pkgPath), typeof bin === 'string' ? bin : bin.tailwindcss);
  if (!existsSync(entry)) process.exit(0);

  rmSync(binPath);
  symlinkSync(relative(dirname(binPath), entry), binPath);
  console.log(`postinstall: linked node_modules/.bin/tailwindcss -> ${relative(root, entry)}`);
} catch (err) {
  console.warn(`postinstall: could not relink the Tailwind CLI (${err.message}); Hugo may fail to build CSS.`);
}
