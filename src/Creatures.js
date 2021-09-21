import React from 'react';

export default class Creatures extends React.Component {
    render() {
        return (
            <>
                <img src={this.props.url} alt={this.props.description}/> 
                <p>{this.props.description}</p> 
                <p>Horns: {this.props.horns}</p> 
            </>
        )
    }
}
