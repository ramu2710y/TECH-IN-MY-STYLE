import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/CssGlobal.css';
import CssCourseLayout from './components/CssCourseLayout';
import CssHome from './pages/CssHome';
import CssCompiler from './pages/CssCompiler';
import CssConnect from './pages/CssConnect';
import CssResources from './pages/CssResources';
import CssPropertyPage from './pages/CssPropertyPage';
import CssReference from './pages/CssReference';

function CssCourseRoutes() {
  useEffect(() => {
    // Remove any custom cursor that might exist from main pages
    const existingCursor = document.querySelector('.custom-cursor');
    if (existingCursor) {
      existingCursor.remove();
    }

    // Cleanup on unmount
    return () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.remove();
      }
    };
  }, []);

  return (
    <div className="css-course-root">
      <Routes>
        {/* Routes WITH layout (navbar + footer) */}
        <Route element={<CssCourseLayout />}>
          <Route index element={<CssHome />} />
          <Route path="connect" element={<CssConnect />} />
          <Route path="resources" element={<CssResources />} />
          <Route path="reference" element={<CssReference />} />
        </Route>
        
        {/* Routes WITHOUT layout (custom headers) */}
        <Route path="compiler" element={<CssCompiler />} />
        <Route path="property/:property" element={<CssPropertyPage />} />
      </Routes>
    </div>
  );
}

export default CssCourseRoutes;
