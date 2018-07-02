import React from 'react'

import Article from './Article'
import Ad from './Ad'
import Bottom_articles from './Bottom_articles'

const Main = () => {
    return(
        <main className="expanded row">
            <Article />
            <Ad />
            <Bottom_articles />
        </main>
    )
}

export default Main