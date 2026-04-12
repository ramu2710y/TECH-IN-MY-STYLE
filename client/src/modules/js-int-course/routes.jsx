import React from 'react';
import './styles/JsIntGlobal.css';
import { Routes, Route } from 'react-router-dom';
import JsIntHome from './pages/JsIntHome';
import JsIntIndex from './pages/JsIntIndex';
import JsIntTopicPage from './pages/JsIntTopicPage';
import JsIntCompiler from './pages/JsIntCompiler';
import JsIntConnect from './pages/JsIntConnect';
import JsIntResources from './pages/JsIntResources';

export default function JsIntCourseRoutes() {
  return (
    <div className="js-int-course-root">
      <Routes>
        <Route path="/" element={<JsIntHome />} />
        <Route path="/js-int" element={<JsIntIndex />} />
        <Route path="/js-int/:topic" element={<JsIntTopicPage />} />
        <Route path="/compiler" element={<JsIntCompiler />} />
        <Route path="/connect" element={<JsIntConnect />} />
        <Route path="/resources" element={<JsIntResources />} />
      </Routes>
    </div>
  );
}
