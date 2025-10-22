import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeo = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeo)
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    const inter = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(inter);
    };
  }, []);

  return <progress id="question-time" className={mode} max={timeout} value={remainingTime} />;
}
