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
