import React, { Component } from 'react';
import '../App.css';
import TrendingNews from "./trending-news";

class body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       return <div id={"results"}>
            <h2>Trending News</h2>
            <TrendingNews/>
       </div>;
    }
}

export default body;
