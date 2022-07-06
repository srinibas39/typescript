import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  const startTimer = () => {
    intervalRef.current = window.setInterval(
      () => setTimer((timer) => timer + 1),
      1000
    );
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(
      () => setTimer((timer) => timer + 1),
      1000
    );

    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      <p>Timer--{timer}</p>
      <button onClick={stopTimer}>Pause</button>
      <button onClick={startTimer}>start</button>
    </div>
  );
};
