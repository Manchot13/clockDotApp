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
      <div className="text-5xl tabular-nums">
         {currentTime.toLocaleTimeString(undefined, { second: "2-digit" })}
      </div>
   );
}
