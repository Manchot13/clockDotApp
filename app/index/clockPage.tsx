'use client'
import { useEffect, useState } from "react";

type props = {
  time: number;
};

export default function Clock({ time }: props) {
  const [currentTime, setCurrentTime] = useState(new Date(time));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // タイマーをクリーンアップ
  }, []);

  return (
    <div className="text-7xl tabular-nums">
      {currentTime.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </div>
    );
}
