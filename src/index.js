import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/fonts.css'
import App from './components/app/app';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";

import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);