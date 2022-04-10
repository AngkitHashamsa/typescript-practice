import { useEffect, useRef, useState } from "react";

const MutableRefs = () => {
  const [timer, setTimer] = useState(0);
  const intervalTimer = useRef<number | null>(null);
  const stopTimer = () => {
    if (intervalTimer.current) window.clearInterval(intervalTimer.current);
  };

  useEffect(() => {
    intervalTimer.current = window.setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => stopTimer();
  }, []);

  return (
    <div>
      HookTimer = {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRefs;
