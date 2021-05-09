import React, { Component } from 'react';
import API from '../helpers/API';

class trendingNews extends Component {

    state = {
        articles: []
    }

    constructor(props) {
        super(props);
        this.props = props;
        this.api = new API();
    }

    async componentDidMount() {
        try {
            let localisedArticles = [];
            const articles = await this.api.getTopNews();
            for(const article of articles) {
                // TODO en for now but later read from the users browser
                localisedArticles.push(await this.api.localiseNewsArticle(article, "en"));
            }
            this.setState({ articles: localisedArticles });
        } catch (e) {
            alert(e);
        }
    }

    // TODO use translate on the article title and description
    makeArticleDiv(article) {
        let img = "";
        if(article.urlToImage != null) {
            img = <img src={`https:${article.urlToImage}`}/>
        }
        return <div>
            <h2><a href={article.url}>{article.title}</a></h2>
            <p>{article.description}</p>
            {img}
            <p>{article.publishedAt}</p>
        </div>
    }

    render() {
        return (<div>
            {this.state.articles.map((article) => { return this.makeArticleDiv(article) })}
        </div>);
    }

}

export default trendingNews;
