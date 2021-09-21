import React from 'react';
import './App.css';
import Header from './Header.js';
// eslint-disable-next-line no-unused-vars
import images from './data.js';
import Creatures from './Creatures.js';

export default class App extends React.Component {

  state = {
    keyword: ''
    }

    handleSelectKeyword = (e) => {
      this.setState({keyword: e.target.value})
    }

  render() {
    return (

      <div>
        <Header className='head'/>
        <div className='ImageSelect'>
          <p>Showing all {this.state.keyword} creatures</p>
            <select onChange={this.handleSelectKeyword}>
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
        {
          images.map(creature => <Creatures {...images} />)
        }
      </div>
    )
  }
}
