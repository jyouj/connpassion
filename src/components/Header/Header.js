import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
          <h2><Link to='/'>Connpassion</Link></h2>
          <ul>{ props.langList.map((lang, idx) => {
            return <li key={idx}>
              <Link to={'/' + lang}>{lang}</Link></li>
            }) }
          </ul>
        </header>
    )
}

export default Header;