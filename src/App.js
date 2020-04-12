import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Card from './components/Card/Card'

class App extends Component {
  state = {
    query: ''
  }

  setLang(lang) {
    this.setState({query: lang})
  }

  render () {
    const langs = ["python", "javascript", "go", "React", "Swift"];

    return(
      <div>
        <header>
          <h2><Link to='/'>Connpassion</Link></h2>
          <ul>{ langs.map((lang, idx) => {
            return <li key={idx} onClick={this.setLang.bind(this, lang)}>
              <Link to={'/' + lang}>{lang}</Link></li>
            }) }
          </ul>
        </header>
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
