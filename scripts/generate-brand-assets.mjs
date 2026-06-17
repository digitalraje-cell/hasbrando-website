import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function rasterize(svgPath, size, outputName) {
  const svg = await readFile(join(publicDir, svgPath));
  await sharp(svg).resize(size, size).png().toFile(join(publicDir, outputName));
  console.log(`  ✓ ${outputName}`);
}

async function rasterizeOg() {
  const svg = await readFile(join(publicDir, 'og-image.svg'));
  await sharp(svg).resize(1200, 630).png().toFile(join(publicDir, 'og-image.png'));
  console.log('  ✓ og-image.png');
}

async function generateFaviconIco() {
  const iconSvg = await readFile(join(publicDir, 'icon.svg'));
  const [png16, png32] = await Promise.all([
    sharp(iconSvg).resize(16, 16).png().toBuffer(),
    sharp(iconSvg).resize(32, 32).png().toBuffer(),
  ]);
  const ico = await toIco([png16, png32]);
  await writeFile(join(publicDir, 'favicon.ico'), ico);
  console.log('  ✓ favicon.ico');
}

async function main() {
  console.log('Generating HasBrando brand assets…');
  await rasterize('icon.svg', 16, 'favicon-16x16.png');
  await rasterize('icon.svg', 32, 'favicon-32x32.png');
  await rasterize('icon.svg', 180, 'apple-touch-icon.png');
  await rasterize('icon.svg', 192, 'android-chrome-192x192.png');
  await rasterize('icon.svg', 512, 'android-chrome-512x512.png');
  await generateFaviconIco();
  await rasterizeOg();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
