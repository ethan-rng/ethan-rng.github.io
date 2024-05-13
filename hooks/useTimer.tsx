import { useEffect } from 'react';

interface UseTimerProps {
  time: number;
  handleNext: () => void;
}

const useTimer = ({ time, handleNext }: UseTimerProps): void => {
  useEffect(() => {
    // Guard against negative or zero time values
    if (time <= 0) {
      console.error('Time interval must be greater than zero');
      return;
    }

    const interval = setInterval(handleNext, time);

    // Cleanup function to clear the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [time, handleNext]); // Include `time` in the dependencies array to handle updates to the interval time
}

export default useTimer;
