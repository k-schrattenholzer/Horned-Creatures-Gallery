import React from 'react';
import Creatures from './Creatures.js';

export default class Gallery extends React.Component {
    render() {
        return (
        
        <div className='ImageSelect'>
            {
                this.props.images
                .filter(image => {
                    if (!this.props.keyword) {return true}
                    return image.keyword === this.props.keyword
                })
                .map(creature => 
                    <Creatures {...creature} />)
            }

        </div>
        )
    }
}
