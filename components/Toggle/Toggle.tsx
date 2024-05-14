import React, { useEffect } from 'react';
import styles from "./styles.module.css";

type darkModeType = {
  darkMode: boolean;
  setDarkMode: (newDarkMode: boolean) => void;
}

const Toggle: React.FC<darkModeType> = ({ darkMode, setDarkMode }) => {
    useEffect(() => {
        localStorage.setItem('color-theme', darkMode ? 'dark' : 'light'); 
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]); 

    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />
            <span className={styles.slider}></span>
        </label>
    );
}

export default Toggle;
