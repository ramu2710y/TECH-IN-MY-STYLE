import { useState, useEffect } from 'react';

export function useDsaProgress() {
  const [completed, setCompleted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dsa_course_completed') || '[]');
    } catch { return []; }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dsa_course_bookmarks') || '[]');
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('dsa_course_completed', JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem('dsa_course_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const markComplete = (id) => {
    if (!completed.includes(id)) setCompleted(prev => [...prev, id]);
  };

  const toggleBookmark = (id) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const isCompleted = (id) => completed.includes(id);
  const isBookmarked = (id) => bookmarks.includes(id);

  return { completed, bookmarks, markComplete, toggleBookmark, isCompleted, isBookmarked };
}
