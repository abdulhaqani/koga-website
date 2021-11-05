import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// react components
import Home from './components/Home';
// scss

const App = () => {
  return (
    <Router>
      <Fragment>
        <Home></Home>
      </Fragment>
    </Router>
  );
};

export default App;
