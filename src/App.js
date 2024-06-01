import './App.css';
import React from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;