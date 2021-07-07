import React from 'react';
import Layout from '../Layout/layout';
import Navigation from './Navigation';
import './App.css'
function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
      </Layout>      
    </div>
  );
}

export default App;
