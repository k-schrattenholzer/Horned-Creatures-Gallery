import React from 'react'
import Dropdown from './Dropdown.js'
import { hornsOptions, keywordOptions } from '../utils.js';

export default class FilterOptions extends React.Component {
    render() {
        return (
            <div className="Dropdowns">
            <Dropdown
            currentState={this.props.keyword}
            handleSelect={this.handleSelectKeyword}
            optionsList={keywordOptions}
            ref={this.props.keyRef}
            />
    
            <Dropdown
            currentState={this.props.horns}
            handleSelect={this.handleSelectHorns}
            optionsList={hornsOptions}
            ref={this.props.hornsRef}
            />
          </div>
        )
    }
}
