import { Routes, Route } from 'react-router-dom';
import GenAiHome from './pages/GenAiHome';
import GenAiTopics from './pages/GenAiTopics';
import GenAiTopicPage from './pages/GenAiTopicPage';
import GenAiBuildMode from './pages/GenAiBuildMode';
import GenAiNavbar from './components/GenAiNavbar';
import GenAiFooter from './components/GenAiFooter';
import GenAiWrapper from './GenAiWrapper';

export default function GenAiCourseRoutes() {
  return (
    <GenAiWrapper>
      <GenAiNavbar />
      <Routes>
        <Route path="/" element={<GenAiHome />} />
        <Route path="/topics" element={<GenAiTopics />} />
        <Route path="/:topicId" element={<GenAiTopicPage />} />
        <Route path="/build" element={<GenAiBuildMode />} />
      </Routes>
      <GenAiFooter />
    </GenAiWrapper>
  );
}
