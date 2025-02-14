import React from "react";
import Nombres from "./componentes/Nombres";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Nombres />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
