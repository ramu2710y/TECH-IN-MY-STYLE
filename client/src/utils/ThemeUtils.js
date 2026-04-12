// Theme utility functions
export const getTheme = () => {
  return localStorage.getItem('colorTheme') || 'blue';
};

export const setTheme = (theme) => {
  localStorage.setItem('colorTheme', theme);
  document.body.className = document.body.className
    .replace(/theme-\w+/g, '')
    .trim();
  document.body.classList.add(`theme-${theme}`);
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'blue' ? 'violet' : 'blue';
  setTheme(newTheme);
  return newTheme;
};

export const initTheme = () => {
  const theme = getTheme();
  setTheme(theme);
  return theme;
};
