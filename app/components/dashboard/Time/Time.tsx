"use client";
import { useEffect, useState } from "react";
import styles from "./Time.module.scss";

export function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className={styles.time}>
      <div>
        <p  suppressHydrationWarning >{currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}
