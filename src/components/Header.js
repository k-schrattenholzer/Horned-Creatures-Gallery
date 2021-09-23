import React from 'react';
import Title from './Title.js';
import FilterOptions from './FilterOptions.js';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Title">
                <Title />

                <FilterOptions
                    handleSelectHorns={this.props.handleSelectHorns}
                    handleSelectKeyword={this.props.handleSelectKeyword}
                    keyword={this.props.keyword}
                    horns={this.props.horns}/>        
            </div>
        )
    }
}
