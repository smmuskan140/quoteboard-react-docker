import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuoteDetail from './pages/QuoteDetail';
import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote/:id" element={<QuoteDetail />} />
      </Routes>
    </div>
  );
}
