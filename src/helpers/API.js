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

}

export default API;
