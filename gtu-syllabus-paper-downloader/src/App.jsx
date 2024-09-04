
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeComponent from './components/Home';
import PaperComponent from './components/PaperComponent';
import SyllabusComponent from './components/SyllabusComponent';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-2">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/paper" element={<PaperComponent />} />
          <Route path="/syllabus" element={<SyllabusComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
