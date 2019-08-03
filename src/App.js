import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Gender from './components/gender/gender';
import IsJedi from './components/isJedi/isJedi';

function Index() {
  return <Gender />;
}

function About() {
  return <IsJedi />;
}

function Users() {
  return <h2>Avatar</h2>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>


          <Route path="/" exact component={Index} />
          <Route path="/isjedi/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    </div>
  );
}

/*
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about/">About</Link>
    <Link to="/users/">Users</Link>
  </nav>
  */

export default App;
