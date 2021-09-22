import React from 'react';
import Creatures from './Creatures.js';

export default class Gallery extends React.Component {
    render() {
        return (
        
        <div className='Gallery'>
            {
                this.props.images
                .filter(image => {
                    //if keyword and horns are null
                    if (!this.props.keyword && !this.props.horns) return true;
                    //if keyword is selected and horns are null
                    if (this.props.keyword && !this.props.horns) {
                        if(this.props.keyword === image.keyword) return true;}
                    //if keyword is selected and horns are selected
                    if (this.props.keyword && this.props.horns) {
                        if(this.props.keyword === image.keyword && this.props.horns === image.horns) return true;}
                    //if keyword is null and horns are selected
                    if (!this.props.keyword && this.props.horns) {
                        if(this.props.horns === image.horns) return true;}
                    return false;
                })
                .map(creature => 
                    <Creatures {...creature} />)
            }

        </div>
        )
    }
}
