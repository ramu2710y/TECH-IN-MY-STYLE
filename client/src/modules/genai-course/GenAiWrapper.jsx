import { useEffect } from 'react';
import './genai-scoped.css';

export default function GenAiWrapper({ children }) {
  useEffect(() => {
    // Add a class to body when Gen AI course is active
    document.body.classList.add('genai-course-active');
    
    // Store original body styles
    const originalBg = document.body.style.backgroundColor;
    const originalColor = document.body.style.color;
    
    return () => {
      // Remove the class when leaving Gen AI course
      document.body.classList.remove('genai-course-active');
      // Restore original styles
      document.body.style.backgroundColor = originalBg;
      document.body.style.color = originalColor;
    };
  }, []);

  return <div className="genai-course-wrapper">{children}</div>;
}
