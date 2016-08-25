import React from 'react';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import useQueries from 'history/lib/useQueries';
import {Router, Route } from 'react-router';
import App from './App';
import './index.css';

ReactDOM.render(
    <Router history={useQueries(createHashHistory)()}>
        <Route path="/" component={App} />
    </Router>,
  document.getElementById('root')
);
