import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Layout from './containers/Layout';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
