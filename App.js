import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from "./Components/Home";
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Form from './Components/Form';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={Form} />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
