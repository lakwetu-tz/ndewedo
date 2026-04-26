import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const OUTPUT_DIR = "public/images";

// Ensure the folder exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// WordPress REST API endpoint
const BASE_URL = "https://ndewedotours.com/wp-json/wp/v2/media";
const PER_PAGE = 100; // WP limits 100 per page

// Helper to download a single image
async function downloadImage(url, filename) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`❌ Failed: ${url} (${res.status})`);
    return;
  }

  const buffer = await res.arrayBuffer();
  const filePath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(filePath, Buffer.from(buffer));
  console.log(`✅ Saved: ${filename}`);
}

// Fetch and download all media recursively
async function fetchAllImages(page = 1) {
  const res = await fetch(`${BASE_URL}?per_page=${PER_PAGE}&page=${page}`);
  if (!res.ok) {
    console.error(`❌ API error: ${res.status}`);
    return;
  }

  const media = await res.json();
  if (media.length === 0) {
    console.log("🎉 All images downloaded.");
    return;
  }

  for (const item of media) {
    if (item.media_type === "image" && item.source_url) {
      const filename = path.basename(item.source_url);
      await downloadImage(item.source_url, filename);
    }
  }

  // If there might be more, fetch next page
  await fetchAllImages(page + 1);
}

fetchAllImages().catch(console.error);
