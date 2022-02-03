import { render } from "enzyme";
import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <h1 data-ns-test="project-name">Lyrics APP</h1>
      <p data-ns-test="project-description">In this Lyrics APP we can get lyrics of a song by entering either song name or artist name of respective song, when we enter song name or artist name we has to press a button after pressing it, it lists out all songs of an artist in list formate each list has a get lyrics button , by pressing it will display a lyrics of respective song</p>
    </div>
 )
}


export default App;
