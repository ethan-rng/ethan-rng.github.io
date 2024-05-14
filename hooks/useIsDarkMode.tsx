import { useEffect, useState } from 'react';

const useIsDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => document.documentElement.classList.contains('dark');
        setIsDarkMode(checkDarkMode());

        // Optional: Listen for changes
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    setIsDarkMode(checkDarkMode());
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return isDarkMode;
};

export default useIsDarkMode;
