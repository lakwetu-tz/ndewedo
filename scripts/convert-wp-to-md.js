// scripts/convert-wp-to-md.js
const fs = require('fs-extra');
const path = require('path');
const xml2js = require('xml2js');
const TurndownService = require('turndown');
const slugify = require('slugify');

const turndown = new TurndownService({ headingStyle: 'atx' });

async function main() {
  const xmlPath = path.join(process.cwd(), 'export.xml'); // update if different
  if (!fs.existsSync(xmlPath)) {
    console.error('export.xml not found in project root.');
    process.exit(1);
  }

  const xml = await fs.readFile(xmlPath, 'utf8');
  const parsed = await xml2js.parseStringPromise(xml, { explicitArray: false, mergeAttrs: true });

  // WXR structure: rss.channel.item (posts/pages)
  const items = parsed.rss.channel.item;
  if (!items) {
    console.error('No items found in WXR file.');
    process.exit(1);
  }

  // create output folders
  const contentDir = path.join(process.cwd(), 'content');
  const postsDir = path.join(contentDir, 'posts');
  const pagesDir = path.join(contentDir, 'pages');
  await fs.ensureDir(postsDir);
  await fs.ensureDir(pagesDir);

  const arr = Array.isArray(items) ? items : [items];

  for (const item of arr) {
    const postType = item['wp:post_type'];
    if (!postType) continue;

    const status = item['wp:status'] || 'publish';
    if (status !== 'publish') continue; // skip drafts — change if you want them

    const title = item.title || 'untitled';
    const date = item['wp:post_date'] || new Date().toISOString();
    const content = item['content:encoded'] || '';
    const excerpt = item['excerpt:encoded'] || '';
    const categories = [];
    if (item.category) {
      const cats = Array.isArray(item.category) ? item.category : [item.category];
      for (const c of cats) {
        if (c.domain === 'category' || c.domain === 'post_tag') categories.push(c._ || c);
      }
    }

    // featured image: look for wp:postmeta with meta_key = _thumbnail_id -> lookup attachment by id (optional)
    // For simplicity we'll keep featured_media if present
    const slug = item['wp:post_name'] || slugify(title, { lower: true, strict: true }) || Date.now().toString();

    const md = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: "${date}"`,
      `slug: "${slug}"`,
      `excerpt: "${(excerpt || '').replace(/"/g, '\\"').replace(/\n/g, ' ')}"`,
      `categories: ${JSON.stringify(categories)}`,
      '---',
      '',
      turndown.turndown(content)
    ].join('\n');

    if (postType === 'post') {
      const outDir = path.join(postsDir, slug);
      await fs.ensureDir(outDir);
      await fs.writeFile(path.join(outDir, 'index.md'), md, 'utf8');
      console.log(`Wrote post: ${slug}`);
    } else if (postType === 'page') {
      const outDir = path.join(pagesDir, slug);
      await fs.ensureDir(outDir);
      await fs.writeFile(path.join(outDir, 'index.md'), md, 'utf8');
      console.log(`Wrote page: ${slug}`);
    } else if (postType === 'attachment') {
      // skip attachments here — we'll handle media separately
    } else {
      // other post types (custom post types) — write to content/<type>/
      const outDir = path.join(contentDir, postType, slug);
      await fs.ensureDir(outDir);
      await fs.writeFile(path.join(outDir, 'index.md'), md, 'utf8');
      console.log(`Wrote ${postType}: ${slug}`);
    }
  }

  console.log('Conversion finished. Check /content/posts and /content/pages');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
