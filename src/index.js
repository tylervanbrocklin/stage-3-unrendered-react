import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

if (process.env.NODE_ENV === 'development') {
    const a11y = require('react-a11y').default;
    a11y(React, ReactDOM, {
        rules: {
            'img-uses-alt': 'warn',
            'redundant-alt': [ 'warn', [ 'image', 'photo', 'foto', 'bild' ]]
            // ...
        }
    });
}

ReactDOM.render(
            <Router>
                <App/>
            </Router>, document.getElementById('root'));
