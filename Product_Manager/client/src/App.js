import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/Update";
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/product" render={(routeProps) => <Main {...routeProps} />} />
        <Route path="/product/:id" render={(routeProps) => <Details {...routeProps} />} />
        <Route path="/product/:id/edit" render={(routeProps) => <Update {...routeProps} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
