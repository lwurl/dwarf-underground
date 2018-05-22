import React, { Component } from 'react';
import ArticleInfo from './ArticleInfo'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks';

class Article extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <ArticleInfo />
                <ArticleBody />
                <ArticleLinks />
            </div>
        );
    }
}

export default Article;