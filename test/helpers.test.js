import { expect } from 'chai';
import API from "../src/helpers/API";

describe("API helper tests", () => {

    before(() => {
        this.api = new API();
    });

    it("can translate a word properly", async () => {
        const translate = await this.api.translate("朋友", "en");
        expect(translate).to.equal("friend", "朋友 is friend in English");
    });

    it("can translate an article JSON object from Chinese to English", async () => {
        const sampleArticleObject = {
            "status": "ok",
            "totalResults": 26,
            "articles": [
            {
            "source": {
                "id": null,
                "name": "Sina.com.cn"
            },
            "author": "新华社",
                "title": "欧盟决定暂缓豁免疫苗知识产权|新冠肺炎 - 新浪网",
                "description": "欧盟决定暂缓豁免疫苗知识产权",
                "url": "https://finance.sina.com.cn/chanjing/cyxw/2021-05-09/doc-ikmyaawc4221852.shtml",
                "urlToImage": "//n.sinaimg.cn/default/feedbackpics/transform/116/w550h366/20180326/e_NJ-fysqfnf9443598.png",
                "publishedAt": "2021-05-09T02:15:51Z",
                "content": null
            }]
        }
        const localisedArticle = await this.api.localiseNewsArticle(sampleArticleObject, "en");
        expect(localisedArticle.title).to.equal("EU decides to suspend vaccine intellectual property rights exemption | new crown pneumonia-sina.com");
        expect(localisedArticle.description).to.equal("EU decides to suspend vaccine intellectual property rights exemption")
    });

    it("can get the top news in China", async () => {
        const latestNews = await this.api.getTopNews();
        expect(latestNews.articles.length).to.not.equal(0, "should return at least one article");
    });

});
