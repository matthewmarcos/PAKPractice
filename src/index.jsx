import React, { Component } from 'react';
import { render as renderDom } from 'react-dom';

import './index.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Hello from React!!!!!!</h1>
            </div>
        );
    }
}

renderDom(<App />, document.getElementById('app'));
