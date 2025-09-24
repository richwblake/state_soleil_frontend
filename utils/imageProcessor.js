import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";
const outputDirs = {
  landscape: "./src/assets/landscapes",
  portrait: "./src/assets/portraits",
  universal: "./src/assets/universal",
};

fs.readdirSync(inputDir).forEach(async (image) => {
  const inputPath = path.join(inputDir, image);

  // skip over directories in assets folder
  if (image == "landscapes" || image == "portraits" || image == "universal")
    return;

  let outputDir = "";

  if (image.includes("mb")) {
    outputDir = outputDirs["portrait"];
  } else if (image.includes("dt")) {
    outputDir = outputDirs["landscape"];
  } else {
    outputDir = outputDirs["universal"];
  }

  console.log(`${image} -> ${outputDir}`);
});
