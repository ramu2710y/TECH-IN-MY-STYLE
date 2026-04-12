import { useState, useCallback } from 'react';

const STORAGE_KEY = 'db_style_progress';
const BOOKMARKS_KEY = 'db_style_bookmarks';

export function useProgress() {
  const [, forceUpdate] = useState(0);

  const getAll = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  };

  const getProgress = useCallback((topicId) => {
    return !!getAll()[topicId];
  }, []);

  const toggleProgress = useCallback((topicId) => {
    const all = getAll();
    if (all[topicId]) delete all[topicId];
    else all[topicId] = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    forceUpdate(n => n + 1);
  }, []);

  const getCompletedCount = useCallback(() => {
    return Object.keys(getAll()).length;
  }, []);

  const getBookmarks = useCallback(() => {
    try { return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]'); }
    catch { return []; }
  }, []);

  const toggleBookmark = useCallback((topicId) => {
    const bm = getBookmarks();
    const idx = bm.indexOf(topicId);
    if (idx >= 0) bm.splice(idx, 1);
    else bm.push(topicId);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bm));
    forceUpdate(n => n + 1);
  }, []);

  const isBookmarked = useCallback((topicId) => {
    return getBookmarks().includes(topicId);
  }, []);

  return { getProgress, toggleProgress, getCompletedCount, getBookmarks, toggleBookmark, isBookmarked };
}
