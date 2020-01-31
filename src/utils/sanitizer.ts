const remark = require("remark");
const stripMarkdown = require("strip-markdown");

class Sanitizer {
    removeMarkdown(text: string) {
        return remark()
            .use(stripMarkdown)
            .processSync(text)
            .toString()
            .trim();
    }

    removeBadCharacters(text: string) {
        return text.replace(/[!@#$%^&*]/g, "");
    }

    sanitize(text: string) {
        let cleanText: string = this.removeMarkdown(text);
        return this.removeBadCharacters(cleanText);
    }
}

export default Sanitizer;
