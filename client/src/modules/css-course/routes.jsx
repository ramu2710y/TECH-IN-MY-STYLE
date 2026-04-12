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
    // Custom cursor implementation
    const initCustomCursor = () => {
      if (window.innerWidth <= 768) return;

      // Remove any existing custom cursor
      const existingCursor = document.querySelector('.custom-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }

      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      
      const cursorDot = document.createElement('div');
      cursorDot.classList.add('cursor-dot');
      
      cursor.appendChild(cursorDot);
      document.body.appendChild(cursor);
      
      const moveHandler = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
      };
      
      const outHandler = (e) => {
        if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
          cursor.style.opacity = '0';
        }
      };
      
      document.addEventListener('mousemove', moveHandler);
      document.addEventListener('mouseout', outHandler);
      
      return () => {
        document.removeEventListener('mousemove', moveHandler);
        document.removeEventListener('mouseout', outHandler);
        const activeCursor = document.querySelector('.custom-cursor');
        if (activeCursor) {
          activeCursor.remove();
        }
      };
    };

    const cleanup = initCustomCursor();
    return cleanup;
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
