import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Chat from './components/Chat.jsx';
import Translator from './components/Translator.jsx';
import FAQs from './components/FAQs.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;