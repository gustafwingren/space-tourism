import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DesignSystem from './pages/DesignSystem/DesignSystem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="design-system" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
