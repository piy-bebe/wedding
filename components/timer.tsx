'use client';

import { useState, useEffect } from 'react';

const WEDDING_DATE = new Date('2026-08-07T14:00:00');

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return <div>Это уже сегодня! 🎉</div>;

  return (
    <div>
      <h2>До свадьбы осталось:</h2>
      <div>
        {timeLeft.days} дней, {timeLeft.hours} часов, {timeLeft.minutes} минут, {timeLeft.seconds} секунд
      </div>
    </div>
  );
}
