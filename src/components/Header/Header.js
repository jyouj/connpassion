import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css'
import 'bulma/css/bulma.css'

const Header = (props) => {
    return (
        <header className="header-s">
            <div className="logo-img">
                <Link to='/'><h1 className="title font-title" style={{color: 'black'}}>Livre</h1></Link>
            </div>
            <div className="tabs">
                <ul>{ props.langList.map((lang, idx) => {
                    return <li key={idx}>
                    <Link to={'/' + lang} style={{color: '#228b22'}}>{lang}</Link></li>
                }) }
                </ul>
            </div>
        </header>
    )
}

export default Header;