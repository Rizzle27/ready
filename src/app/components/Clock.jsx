'use client'
import { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      setReady(true);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Extraer horas, minutos y AM/PM de la fecha actual
  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const period = time.getHours() >= 12 ? "PM" : "AM";

  return ready ? (
    <div className="text-2xl text-cranberry">{hours}:{minutes} {period}</div>
  ) : null;
};