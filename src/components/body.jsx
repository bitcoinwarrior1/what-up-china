import React, { Component } from 'react';
import '../App.css';
import TrendingNews from "./trending-news";
import TrendingBilibili from "./trending-bilibili";

class body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       return <div id={"results"}>
            <h2>Trending News</h2>
            <TrendingNews/>
            <h2>Trending on Bilibili</h2>
           <TrendingBilibili/>
       </div>;
    }
}

export default body;
