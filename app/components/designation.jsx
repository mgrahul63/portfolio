"use client";
import { personalData } from "@/utils/data/personal-data";
import { useEffect, useState } from "react";

const Designation = () => {
  const { designation } = personalData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);
  const typingSpeed = 200;
  const pauseTime = 1000;

  useEffect(() => {
    const currentText = designation[currentIndex];
    let timeout;

    if (typing) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // finished typing, pause before deleting
        timeout = setTimeout(() => setTyping(false), pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, typingSpeed);
      } else {
        // finished deleting, move to next
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % designation.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, currentIndex, designation]);

  return (
    <div className="w-64 h-10 flex items-center">
      <span className="whitespace-nowrap">{displayText}</span>
      <span className="animate-blink ml-1">|</span>

      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Designation;
