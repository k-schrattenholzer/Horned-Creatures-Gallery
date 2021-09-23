import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    
    render() {
        return (
            <header class='HCont'>
                <h1 className='HeadText'>Creatures with Horns</h1>
                <p>Image Gallery</p>
                <Link to='/'>home</Link>
            </header>
        )
    }
}
