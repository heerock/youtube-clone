import React from 'react';
import Header from "./Header";
import './App.css';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <h1>Hello Clever Programmer, let's build a YouTube Clone</h1>

      <Header />

      {/* Header -> <Header /> */}
      {/* Sidebar -> <Sidebar> */}
      {/* RecommendedVideos */}
    </div>
  );
}

export default App;
