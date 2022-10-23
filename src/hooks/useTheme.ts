import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export type Theme = 'dark' | 'light';

function useTheme(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const [state, setState] = useState<Theme>('dark');
  // update the localStorage if state of key changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(state));
  }, [state]);
  // return new state object and state setter function
  return [state, setState];
}

export default useTheme;
