import sharp from "sharp";

export async function convertToWebP(inputPath: string, outputPath: string) {
  await sharp(inputPath)
    .webp({ quality: 75 })
    .toFile(outputPath);
}
