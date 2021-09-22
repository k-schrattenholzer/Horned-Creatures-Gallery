import React from 'react'

export default class Dropdown extends React.Component {
    render() {
        return (
            <div className="Select">
                <p>showing all {this.props.currentState}</p>
                <select 
                onChange={this.props.handleSelect}
                value={this.props.currentState}
                >
                    <option value=''>All</option>
                   {
                    this.props.optionsList.map(
                    option => <option
                        key = {option}
                        value = {option}>{option}</option>)
                   }
                </select>
            </div>
        )
    }
}
