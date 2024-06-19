import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/home">
            <button>Go to Home Page</button>
          </Link>
        </nav>
        
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
