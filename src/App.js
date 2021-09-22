import React from 'react';
import './App.css';
import Header from './Header.js';
import TypeList from './TypeList.js';
import HornsList from './HornsList.js';
import images from './data.js';
import Gallery from './Gallery.js';


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
        <TypeList
        state = {this.state}
        handleSelectKeyword = {this.handleSelectKeyword}
        handleSelectHorns = {this.handleSelectHorns}
        />
        <HornsList
        state = {this.state}
        handleSelectKeyword = {this.handleSelectKeyword}
        handleSelectHorns = {this.handleSelectHorns}
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
