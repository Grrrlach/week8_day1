import React, { Component } from 'react'
import {Routes, Route } from 'react-router-dom'
import Page2 from "./views/Page2"
import Home from "./views/Home.js"
import Example from "./views/Example.js"


export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path = '/home' element = {<Home />}/>
          <Route exact path = '/page2' element = {<Page2 />}/>
          <Route exact path = '/example' element = {<Example />}/>


        </Routes>
      </div>
    )
  }
}
