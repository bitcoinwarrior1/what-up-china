import request from 'superagent';

class API {

    async getTopNews() {
        try {
            const query = "https://what-up-china-server.herokuapp.com/top-news/";
            const result = await request.get(query);
            return JSON.parse(result.text);
        } catch (e) {
            return e;
        }
    }

    async getTrendingOnBilibili() {
        try {
            const query = "https://what-up-china-server.herokuapp.com/bilibili/trending/";
            const result = await request.get(query);
            return JSON.parse(result.text);
        } catch (e) {
            return e;
        }
    }

}

export default API;
