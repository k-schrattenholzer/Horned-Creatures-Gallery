import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Gallery from './Gallery.js';
import Home from './Home.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/Gallery" 
                            exact
                            render={(routerProps) => <Gallery {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
