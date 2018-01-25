import React, { Component } from 'react';
import './App.css'
import {articles} from './fixtures'
import Articles from './article'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper__inner">
        <div className="articles">
          {articles.map((article, idx) => <Articles key = {idx} article = {article}/>)}
        </div>
        </div>
      </div>
    );
  }
}
export default App;