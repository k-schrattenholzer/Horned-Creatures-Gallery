import React from 'react';

export default class Creatures extends React.Component {
    render() {
        return (
            <>
                <p>{this.props.description}</p>
                <img src={this.props.url} alt={this.props.description}/>  
            </>
        )
    }
}
