import React from 'react'

import Author from './Author'
import Article_body from './Article_body'
import Article_links from './Article_links'
import Ad from './Ad'
import Bottom_articles from './Bottom_articles'

const Main = () => {
    return(
        <main className="expanded row">
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <Author />
                <Article_body />
                <Article_links />
            </div>
            
            <Ad />
            <Bottom_articles />
        </main>
    )
}

export default Main