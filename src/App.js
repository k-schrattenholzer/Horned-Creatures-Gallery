import React from 'react';
import './App.css';
import images from './data.js';
import Header from './components/Header.js';
import FilterOptions from './components/FilterOptions.js';
import Gallery from './components/Gallery.js';



export default class App extends React.Component {

  state = {
    keyword: '',
    horns: '',
    hornsRef: 'horned creatures',
    keyRef: 'cuties'
    }

    handleSelectKeyword = (e) => {
      this.setState({keyword: e.target.value})
    }

    handleSelectHorns = (e) => {
      this.setState({horns: Number(e.target.value)})
    }

  render() {
    return (
      <div className="App">

        <div className="Header">
          <Header />
          <FilterOptions
            keyword={this.state.keyword}
            horns={this.state.horns}
            keyRef={this.state.keyRef}
            hornsRef={this.state.hornsRef}
           />
        </div>

        <Gallery
        images={images}
        keyword={this.state.keyword}
        horns={this.state.horns} />

      </div>
    )
  }
}
