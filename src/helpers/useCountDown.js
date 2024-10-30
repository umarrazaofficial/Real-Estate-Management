import { useEffect, useState } from 'react';
import { isAfter } from 'date-fns';

const getReturnValues = countDown => {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

const useCountdown = targetDate => {
  const isGivenTimeAfterCurrentTime = isAfter(targetDate, new Date());
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    let interval;

    if (isGivenTimeAfterCurrentTime) {
      interval = setInterval(() => {
        const time = countDownDate - new Date().getTime();
        setCountDown(time);

        if (time === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countDownDate, isGivenTimeAfterCurrentTime]);

  return getReturnValues(countDown);
};

export { useCountdown };
