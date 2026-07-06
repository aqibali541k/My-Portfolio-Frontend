import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-between w-14 h-7 p-1 rounded-full 
        transition-colors duration-500 ease-in-out cursor-pointer shadow-inner
        border border-border-custom focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary-blue focus-visible:ring-offset-2
        ${isDark ? 'bg-[#111827] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]' : 'bg-[#E5E7EB] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun Icon (left) */}
      <div className={`z-10 w-5 h-5 flex flex-col items-center justify-center transition-opacity duration-300 ${isDark ? 'opacity-50' : 'opacity-100'}`}>
        <FaSun className="text-yellow-500 text-xs" />
      </div>

      {/* Moon Icon (right) */}
      <div className={`z-10 w-5 h-5 flex flex-col items-center justify-center transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-50'}`}>
        <FaMoon className="text-[#8B5CF6] text-xs" />
      </div>

      {/* Sliding Thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`
          absolute left-1 top-1 w-5 h-5 rounded-full flex items-center justify-center
          shadow-[0_2px_5px_rgba(0,0,0,0.2)] z-20 pointer-events-none transform
        `}
        style={{
          x: isDark ? 28 : 0, 
          backgroundColor: isDark ? '#1F2937' : '#FFFFFF'
        }}
      >
        <motion.div
          animate={{ rotate: isDark ? -180 : 0, scale: isDark ? 1 : 1.1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <FaMoon className="text-white text-[10px]" />
          ) : (
            <FaSun className="text-yellow-600 text-[10px]" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
