import request from 'superagent';

class API {

    async getTopNews() {
        try {
            const result = await request.get("https://newsapi.org/v2/top-headlines?country=cn&apiKey=6d7709b0ec234faab6e438466941c2ae");
            return JSON.parse(result.text).articles;
        } catch (e) {
            return e;
        }
    }

    async localiseNewsArticle(article, toLangCode) {
        try {
            article.description = await this.translate(article.description, toLangCode);
            article.title = await this.translate(article.title, toLangCode);
        } catch (e) {
            console.error(e);
        }
        return article;
    }

    async translate(text, toLangCode) {
        try {
            const result = await request.post(`https://translation.googleapis.com/language/translate/v2`, {
                body: {
                    "q": text,
                    "source": "zh",
                    "target": toLangCode,
                    "format": "text"
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " //TODO
                }
            });

            return result.data.translations.translatedText;
        } catch (e) {
            console.error(e);
            return text;
        }
    }

}

export default API;
