import { getReturnValues } from '@utils/date-util';
import { useEffect, useState } from 'react';

function useCountdown(targetDate: Date) {
  const countDownDate = targetDate.getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(countDown);
}

export default useCountdown;
