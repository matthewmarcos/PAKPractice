import React, { Component } from 'react';
import { render as renderDom } from 'react-dom';

import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';
import './index.css';

class App extends Component {
    render() {
        return (
            <div className="app container">
                <h1>Hello from React!!!!!!</h1>
            </div>
        );
    }
}

renderDom(<App />, document.getElementById('app'));
