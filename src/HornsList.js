import React, { Component } from 'react'

export default class HornsList extends Component {
    render() {
        return (
            <div className="Select">
                <p>showing all {this.props.state.keyword}</p>
                <select onChange={this.props.handleSelectKeyword}>
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
        )
    }
}
