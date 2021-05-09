import React, { Component } from 'react';
import '../App.css';
import TrendingNews from "./trending-news";

class body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       return <div id={"results"}>
            <TrendingNews/>
       </div>;
    }
}

export default body;
