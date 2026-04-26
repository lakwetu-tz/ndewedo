import fs from "fs/promises";
import path from "path";

// Root folder to scan
const ROOT_DIR = "C:/Users/DELL/fyp/Ndewedo tours and safari/ndewedo";

// Folders to exclude
const EXCLUDE_FOLDERS = ["node_modules", ".git", "scripts", ".next"];

// Output file
const OUTPUT_FILE = "directory-structure.txt";

/**
 * Recursively builds the folder tree as a string
 * @param {string} dir 
 * @param {string} prefix 
 * @returns {Promise<string>}
 */
async function buildTree(dir, prefix = "") {
  let tree = "";
  const entries = await fs.readdir(dir, { withFileTypes: true });

  // Sort folders first, then files
  entries.sort((a, b) => a.isDirectory() === b.isDirectory() ? 0 : a.isDirectory() ? -1 : 1);

  for (const [index, entry] of entries.entries()) {
    const isLast = index === entries.length - 1;
    const pointer = isLast ? "└── " : "├── ";
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDE_FOLDERS.includes(entry.name)) continue;
      tree += `${prefix}${pointer}${entry.name}/\n`;
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      tree += await buildTree(fullPath, newPrefix);
    } else {
      tree += `${prefix}${pointer}${entry.name}\n`;
    }
  }

  return tree;
}

// Main function
async function main() {
  try {
    const tree = await buildTree(ROOT_DIR);
    await fs.writeFile(OUTPUT_FILE, tree, "utf-8");
    console.log(`✅ Directory structure saved to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

main();
