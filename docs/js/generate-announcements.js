import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const adsFolder = path.join(process.cwd(), "content/announcements");
const outputFile = path.join(process.cwd(), "data/announcements.json");

const files = fs.readdirSync(adsFolder);

const ads = files
  .map(file => {
    const filePath = path.join(adsFolder, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);

    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || "",
      date: data.date || "",
      image: data.image || "",
      body: marked(body.trim())
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputFile, JSON.stringify(ads, null, 2));

console.log(`Generated ${ads.length} ads in ${outputFile}`);
