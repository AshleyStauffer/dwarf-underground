import React from 'react'

import Author from './Author'
import Article_body from './Article_body'
import Article_links from './Article_links'

const Article = () => {
    return(
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author />
            <Article_body />
            <Article_links />
        </div>
    )
}

export default Article