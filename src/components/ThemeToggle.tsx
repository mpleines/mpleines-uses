import { FunctionComponent, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi/index.js';
import useTheme from '../hooks/useTheme';

interface ThemeToggleProps {}

const ThemeToggle: FunctionComponent<ThemeToggleProps> = () => {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      className="p-2 flex items-center rounded font-bold hover:outline hover:outline-darkGrey dark:hover:outline-white"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
