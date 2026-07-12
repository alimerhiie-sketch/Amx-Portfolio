const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "../public/reels");
const OUTPUT_DIR = path.join(__dirname, "../public/reels/compressed");

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const files = fs.readdirSync(INPUT_DIR).filter(
  (f) => /\.(mp4|mov|avi|mkv|webm)$/i.test(f)
);

if (files.length === 0) {
  console.log("No video files found in public/reels/");
  process.exit(0);
}

console.log(`Found ${files.length} video(s). Compressing...\n`);

files.forEach((file, i) => {
  const input = path.join(INPUT_DIR, file);
  const name = path.basename(file, path.extname(file));
  const output = path.join(OUTPUT_DIR, `${name}.mp4`);

  if (fs.existsSync(output)) {
    console.log(`[${i + 1}/${files.length}] Skipping (already compressed): ${file}`);
    return;
  }

  console.log(`[${i + 1}/${files.length}] Compressing: ${file}`);
  try {
    execSync(
      `ffmpeg -i "${input}" -vf "scale=1080:-2" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 96k -movflags +faststart -y "${output}"`,
      { stdio: "inherit" }
    );
    const before = (fs.statSync(input).size / 1024 / 1024).toFixed(1);
    const after = (fs.statSync(output).size / 1024 / 1024).toFixed(1);
    console.log(`   Done: ${before}MB → ${after}MB\n`);
  } catch (e) {
    console.error(`   Failed: ${file}`, e.message);
  }
});

console.log("\nAll done! Compressed files are in public/reels/compressed/");
