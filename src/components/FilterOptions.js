import React from 'react'
import Dropdown from './Dropdown.js'
import { hornsOptions, keywordOptions } from '../utils.js';

export default class FilterOptions extends React.Component {
    render() {
        return (
            <div className="Dropdowns">
            <Dropdown
            currentState={this.props.keyword}
            handleSelect={this.props.handleSelectKeyword}
            optionsList={keywordOptions}
            />
    
            <Dropdown
            currentState={this.props.horns}
            handleSelect={this.props.handleSelectHorns}
            optionsList={hornsOptions}
            />
            <p>
            currently showing all {this.props.keyword}s with {this.props.horns} horn(s)
            </p>
          </div>
        )
    }
}
