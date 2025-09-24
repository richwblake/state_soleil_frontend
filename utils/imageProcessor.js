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

fs.readdirSync(inputDir).forEach(async (image) => {
  const inputPath = path.join(inputDir, image);

  // skip over directories in assets folder
  if (image == "landscapes" || image == "portraits" || image == "universal")
    return;

  let output = {};

  if (image.includes("-mb")) {
    output.path = path.join(
      config.portrait.path,
      image.replace(/\.\w+$/, ".webp")
    );
    output.width = config.portrait.width;
  } else if (image.includes("-dt")) {
    output.path = path.join(
      config.landscape.path,
      image.replace(/\.\w+$/, ".webp")
    );
    output.width = config.landscape.width;
  } else {
    output.path = path.join(
      config.universal.path,
      image.replace(/\.\w+$/, ".webp")
    );
    output.width = config.universal.width;
  }

  await sharp(inputPath)
    .resize({ width: output.width })
    .webp({ quality: 80 })
    .toFile(output.path);

  console.log(`Resized ${image} -> ${output.path}`);
});
