import { useState, useEffect } from 'react';

const useIsMobile = (threshold: number = 640) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth < threshold);
            };

            handleResize();
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [threshold]);

    return isMobile;
}

export default useIsMobile;
