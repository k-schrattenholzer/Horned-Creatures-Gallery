import React from 'react';
import './App.css';
import images from './data.js';
import ImageGallery from './components/ImageGallery.js';
import Header from './components/Header.js';



export default class Gallery extends React.Component {

  state = {
    keyword: '',
    horns: '',
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
        <Header 
        handleSelectHorns={this.handleSelectHorns}
        handleSelectKeyword={this.handleSelectKeyword}
        keyword={this.state.keyword}
        horns={this.state.horns} />

        <ImageGallery
        images={images}
        keyword={this.state.keyword}
        horns={this.state.horns} />

      </div>
    )
  }
}
