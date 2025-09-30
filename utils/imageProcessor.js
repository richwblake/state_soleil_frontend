import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";
const config = {
  landscape: {
    path: "./src/assets/landscapes",
    width: 1920,
  },
  portrait: {
    path: "./src/assets/portraits",
    width: 1200,
  },
  universal: {
    path: "./src/assets/universal",
    width: 1200,
  },
};

fs.readdirSync(inputDir, { withFileTypes: true }).forEach(async (entry) => {
  // Skip directories
  if (entry.isDirectory()) return;

  // Skip non-image files
  if (!/\.(jpe?g|png|gif|webp|avif)$/i.test(entry.name)) return;

  const inputPath = path.join(inputDir, entry.name);

  let output = {};

  if (entry.name.includes("-mb")) {
    output.path = path.join(
      config.portrait.path,
      entry.name.replace(/\.\w+$/, ".webp")
    );
    output.width = config.portrait.width;
  } else if (entry.name.includes("-dt")) {
    output.path = path.join(
      config.landscape.path,
      entry.name.replace(/\.\w+$/, ".webp")
    );
    output.width = config.landscape.width;
  } else {
    output.path = path.join(
      config.universal.path,
      entry.name.replace(/\.\w+$/, ".webp")
    );
    output.width = config.universal.width;
  }

  try {
    await sharp(inputPath)
      .resize({ width: output.width })
      .webp({ quality: 80 })
      .toFile(output.path);

    console.log(`Resized ${entry.name} -> ${output.path}`);
  } catch (err) {
    console.error(`❌ Failed on ${entry.name}:`, err.message);
  }
});
