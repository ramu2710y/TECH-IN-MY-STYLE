import { Outlet } from 'react-router-dom';
import HtmlNavbar from './HtmlNavbar';
import HtmlFooter from './HtmlFooter';
import '../styles/HtmlCourseLayout.css';

export default function HtmlCourseLayout() {
  return (
    <div className="html-course-module">
      <HtmlNavbar />
      <main className="html-course-main">
        <Outlet />
      </main>
      <HtmlFooter />
    </div>
  );
}
