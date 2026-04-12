import React from 'react';
import './styles/JsGlobal.css';
import { Routes, Route } from 'react-router-dom';
import JsHome from './pages/JsHome';
import JsIndex from './pages/JsIndex';
import JsTopicPage from './pages/JsTopicPage';
import JsCompiler from './pages/JsCompiler';
import JsResources from './pages/JsResources';
import JsConnect from './pages/JsConnect';

export default function JsCourseRoutes() {
  return (
    <div className="js-basic-course-root">
      <Routes>
        <Route path="/" element={<JsHome />} />
        <Route path="js" element={<JsIndex />} />
        <Route path="js/:topic" element={<JsTopicPage />} />
        <Route path="compiler" element={<JsCompiler />} />
        <Route path="resources" element={<JsResources />} />
        <Route path="connect" element={<JsConnect />} />
      </Routes>
    </div>
  );
}
