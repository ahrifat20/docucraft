import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const pathDirectory = path.join(process.cwd(), "docs");

export const getDocuments = () => {
    const fileNames = fs.readdirSync(pathDirectory);
    const allDocuments = fileNames.map(fileName => {
        const id = fileName.replace(".md", "");
        const fullPath = path.join(pathDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return { id, ...matterResult.data };
    });
    return allDocuments.sort((a,b) => {
        if(a.order < b.order) {
            return -1;
        }
        return 0;
    });
};

export const getDocumentContent = async (id) => {
    const fullPath = path.join(pathDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents); 

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        ...matterResult.data,
        contentHtml
    }
};