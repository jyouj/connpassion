import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Card from './components/Card/Card'
import Header from './components/Header/Header'

class App extends Component {
  render () {
    const langs = ["python", "javascript", "go", "react", "swift"];

    return(
      <div>
        <Header langList={langs} />
        {/*<header>
          <h2><Link to='/'>Connpassion</Link></h2>
          <ul>{ langs.map((lang, idx) => {
            return <li key={idx}>
              <Link to={'/' + lang}>{lang}</Link></li>
            }) }
          </ul>
          </header>*/}
        <div>
          <Switch>
            <Route exact path="/">表示したい言語を選んでください</Route>
            <Route path='/:lang' component={Card} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
