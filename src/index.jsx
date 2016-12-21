import React, { Component } from 'react';
import { render as renderDom } from 'react-dom';
import { MyRoutes } from './MyRoutes';

import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="app">
                    <h1>Hello from React!!!!!!</h1>
                </div>
            </div>
        );
    }
}

renderDom(<App />, document.getElementById('el'));
