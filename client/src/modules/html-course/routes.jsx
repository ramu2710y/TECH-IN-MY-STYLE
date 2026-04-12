import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/HtmlGlobal.css';
import HtmlCourseLayout from './components/HtmlCourseLayout';
import HtmlHome from './pages/HtmlHome';
import HtmlCompiler from './pages/HtmlCompiler';
import HtmlConnect from './pages/HtmlConnect';
import HtmlResources from './pages/HtmlResources';
import HtmlTagPage from './pages/HtmlTagPage';
import HtmlReference from './pages/HtmlReference';

function HtmlCourseRoutes() {
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
    <div className="html-course-root">
      <Routes>
        {/* Routes WITH layout (navbar + footer) */}
        <Route element={<HtmlCourseLayout />}>
          <Route index element={<HtmlHome />} />
          <Route path="connect" element={<HtmlConnect />} />
          <Route path="resources" element={<HtmlResources />} />
          <Route path="reference" element={<HtmlReference />} />
        </Route>
        
        {/* Routes WITHOUT layout (custom headers) */}
        <Route path="compiler" element={<HtmlCompiler />} />
        <Route path="tag/:tag" element={<HtmlTagPage />} />
      </Routes>
    </div>
  );
}

export default HtmlCourseRoutes;
