import React, { Component } from 'react';
import API from '../helpers/API';

class sentiment extends Component {

    state = {
        sentiment: ""
    }

    constructor(props) {
        super(props);
        this.props = props;
        this.api = new API();
    }

    componentDidMount() {
        const sentimentCallback = () => {
            // TODO this is pretty crude
            const text = document.getElementById("results").innerText
                .replace(/[^a-z\d\s]+/gi,'')
                .replace("Hot News Baidu", "")
                .replace("Trending News", "")
                .replace("Trending on Bilibili", "");
            const sentiment = this.api.getTextSentiment(text, "English");
            if(!isNaN(sentiment)) {
                this.setState({ sentiment: sentiment });
            }
        };
        document.getElementById("baiduNewsButton").addEventListener("click", sentimentCallback, false);
        document.getElementById("trendingNewsButton").addEventListener("click", sentimentCallback, false);
        document.getElementById("trendingBilibiliButton").addEventListener("click", sentimentCallback, false);
    }

    handle() {
        if(this.state.sentiment !== "") {
            return <div id={"sentiment"}>
                <h3>Sentiment (Beta)</h3>
                {this.getSentimentGraphic()}
                <h3><i>Score: {this.state.sentiment.toFixed(3)}</i></h3>
            </div>;
        }
        return <div/>;
    }

    getSentimentGraphic() {
        const sentiment = parseFloat(this.state.sentiment);
        if(sentiment === 0) {
            return <img className={"faces"} src={"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55321/neutral-face-emoji-clipart-md.png"} alt={"neutral"}/>
        } else if (sentiment > 0) {
            return <img className={"faces"} src={"https://www.kindpng.com/picc/m/40-408571_original-smiley-face-png-images-clipart-roblox-smile.png"} alt={"happy"}/>
        } else {
            return <img className={"faces"} src={"https://lh3.googleusercontent.com/proxy/Rn2lCovR-IpwLM-0LkXrnUDVBngwHzdfWZ5Un1_o1aiCvuB3fjvlIm4AWaaKMg_BuClvOPXZvUjzjOodqIlsRA8Vx_UXsxc"} alt={"sad"}/>
        }
    }


    render() {
        return (<div>
            {this.handle()}
        </div>);
    }

}

export default sentiment;
