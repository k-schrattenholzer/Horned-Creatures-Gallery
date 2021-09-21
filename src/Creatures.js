import React from 'react';

export default class Creatures extends React.Component {
    render() {
        return (
            <div className='CreatureEl'>
                <img src={this.props.url} alt={this.props.description}/> 
                <p>{this.props.title}</p> 
                <p>Horns: {this.props.horns}</p> 
            </ div>
        )
    }
}
