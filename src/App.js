import React from "react";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container">
          <div className="wireframe">
            <Search defaultCity="tehran" />
            <br />
            <br />
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
