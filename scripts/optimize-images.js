const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '..', 'public', 'projects', 'cortexkitchen');
const outDir = path.join(srcDir, 'optimized');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const sizes = [400, 800, 1200];

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) return;
  const base = path.basename(file, ext);
  const input = path.join(srcDir, file);

  try {
    for (const w of sizes) {
      const outName = `${base}-${w}.webp`;
      const outPath = path.join(outDir, outName);
      await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
    }
    // also generate a full-size webp
    await sharp(input).webp({ quality: 88 }).toFile(path.join(outDir, `${base}.webp`));
    console.log('Processed', file);
  } catch (err) {
    console.error('Failed', file, err.message);
  }
}

(async () => {
  const files = fs.readdirSync(srcDir).filter(f => fs.statSync(path.join(srcDir, f)).isFile());
  for (const f of files) await processFile(f);
  console.log('Done');
})();
