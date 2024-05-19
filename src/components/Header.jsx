import { useEffect, useState } from 'react';
import MoonIcon from './UI/Icons/MoonIcon';
import SunIcon from './UI/Icons/SunIcon';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <header className="flex justify-between items-center mb-8 sm:mb-6">
      <h1 className="uppercase text-white text-[2.5rem] sm:text-[1.75rem] font-bold tracking-[.375em]">
        Todo
      </h1>
      <button onClick={handleToggleTheme}>
        {isDarkMode && <SunIcon className="w-6 h-6 sm:w-5 sm:h-5" />}
        {!isDarkMode && <MoonIcon className="w-6 h-6 sm:w-5 sm:h-5" />}
      </button>
    </header>
  );
}
