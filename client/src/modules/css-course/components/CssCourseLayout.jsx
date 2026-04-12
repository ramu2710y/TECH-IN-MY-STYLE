import React from 'react';
import { Outlet } from 'react-router-dom';
import CssNavbar from './CssNavbar';
import CssFooter from './CssFooter';
import '../styles/CssCourseLayout.css';

export default function CssCourseLayout() {
  return (
    <div className="css-course-module">
      <CssNavbar />
      <main className="css-course-main">
        <Outlet />
      </main>
      <CssFooter />
    </div>
  );
}
