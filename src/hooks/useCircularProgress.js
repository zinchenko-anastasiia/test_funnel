import { useEffect, useState } from "react";

const useCircularProgress = (showCircular) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (showCircular) {
      let current = 0;
      const interval = setInterval(() => {
        current += 5;
        setPercentage(current);
        if (current >= 100) {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showCircular]);

  return percentage;
};

export default useCircularProgress;
