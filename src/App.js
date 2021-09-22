import React from 'react';
import './App.css';
import Header from './Header.js';
import Dropdown from './Dropdown.js';
import images from './data.js';
import Gallery from './Gallery.js';
import { hornsOptions, keywordOptions } from './utils.js';


export default class App extends React.Component {

  state = {
    keyword: '',
    horns: ''
    }

    handleSelectKeyword = (e) => {
      this.setState({keyword: e.target.value})
    }

    handleSelectHorns = (e) => {
      this.setState({horns: e.target.value})
    }

  render() {
    return (

      <div className="App">
        <Header />
        <Dropdown
        currentState={this.state.keyword}
        handleSelect = {this.handleSelectKeyword}
        optionsList = { keywordOptions }
        />
        <Dropdown
        currentState={this.state.horns}
        handleSelect = {this.handleSelectHorns}
        optionsList = { hornsOptions }
        />
        
        <hr />
        <Gallery
        images={images}
        keyword={this.state.keyword}
        horns={this.state.horns} />

      </div>
    )
  }
}
