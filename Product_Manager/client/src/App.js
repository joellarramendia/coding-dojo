import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/product" render={(routeProps) => <Main {...routeProps} />} />
        <Route path="/product/:id" render={(routeProps) => <Details {...routeProps} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
