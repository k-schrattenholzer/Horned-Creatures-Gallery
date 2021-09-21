import React from 'react';
import './App.css';
import Header from './Header.js';
import images from './data.js';
import Gallery from './Gallery.js';


export default class App extends React.Component {

  state = {
    keyword: ''
    }

    handleSelectKeyword = (e) => {
      this.setState({keyword: e.target.value})
    }

  render() {
    return (

      <div className="App">
        <Header />

        <div className="Select">
          <p>looking for something in particular?</p>
          <select onChange={this.handleSelectKeyword}>
            <option value="">All</option>
            <option value="narwhal">Narwhal</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">Uni-Lego</option>
            <option value="triceratops">Triceratops</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="chameleon">Chameleon</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
          </select>
        </div>
        <hr />
        <Gallery
        images={images}
        keyword={this.state.keyword} />

      </div>
    )
  }
}
