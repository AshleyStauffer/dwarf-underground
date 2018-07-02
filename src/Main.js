import React from 'react'

import Article from './Article'
import Ad from './Ad'
import BottomArticles from './BottomArticles'

const Main = () => {
    return(
        <main className="expanded row">
            <Article />
            <Ad />
            <BottomArticles />
        </main>
    )
}

export default Main