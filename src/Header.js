import React from 'react'

import Logo from './Logo'
import Links from './Links'
import Title from './Title'

const Header = () => {
    return(
        <div className="expanded row header">
          <div className="clearfix">
            <Logo />
            <Links />
            <Title />
          </div>
         </div>
    )
}

export default Header