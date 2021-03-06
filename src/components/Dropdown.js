import React from 'react'

export default class Dropdown extends React.Component {
    render() {
        return (
            <div className="Select">
                <select 
                onChange={this.props.handleSelect}
                value={this.props.currentState}
                >
                    <option value=''></option>
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
