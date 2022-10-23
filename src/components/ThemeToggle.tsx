import { FunctionComponent, useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi/index.js';

interface ThemeToggleProps {}

const ThemeToggle: FunctionComponent<ThemeToggleProps> = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }

    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }

    if (window.matchMedia('prefers-color-scheme: dark').matches) {
      return 'dark';
    }

    return 'light';
  });

  const changeTheme = (theme: 'dark' | 'light') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  if (theme === undefined) {
    return <div />;
  }

  return (
    <button
      className="p-2 flex items-center rounded font-bold hover:outline hover:outline-darkGrey dark:hover:outline-white"
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="inline-flex items-center gap-1">
        {theme === 'light' ? (
          <>
            <FiSun />
            Light Theme
          </>
        ) : (
          <>
            <FiMoon />
            Dark Theme
          </>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
