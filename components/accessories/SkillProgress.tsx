'use client';
import { Progress, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const SkillProgress = ({ name, ability }: { name: string; ability: string }) => {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState<any>(undefined);
  const targetValue = parseInt(ability); // Parse ability once

  useEffect(() => {
    // Set color based on the ability
    if (targetValue >= 95) {
      setColor("green");
    } else if (targetValue >= 90) {
      setColor("blue");
    } else if (targetValue >= 85) {
      setColor("yellow");
    } else {
      setColor("red");
    }
  }, [targetValue]);

  useEffect(() => {
    const handleScroll = () => {
      const skillSection = document.getElementById(name);
      if (skillSection) {
        const rect = skillSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          animateProgress();
          window.removeEventListener('scroll', handleScroll); // Remove listener after triggering animation
        }
      }
    };

    const animateProgress = () => {
      let currentValue = 0; // Start from 0
      const increment = targetValue / 100; // Increment value
      const duration = 1000; // Total duration of the animation in milliseconds
      const startTime = performance.now(); // Get the current timestamp

      const update = (timestamp: number) => {
        const elapsedTime = timestamp - startTime; // Calculate elapsed time
        const progress = Math.min(elapsedTime / duration, 1); // Normalize progress (0 to 1)
        currentValue = Math.floor(progress * targetValue); // Calculate current value

        setValue(currentValue); // Update progress value

        if (progress < 1) {
          requestAnimationFrame(update); // Continue updating until the duration is reached
        } else {
          setValue(targetValue); // Ensure it ends exactly at targetValue
        }
      };

      requestAnimationFrame(update); // Start the animation
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [name, targetValue]);

  return (
    <div className="w-full" id={name}>
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {name}
        </Typography>
        <Typography color="white" variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {ability}
        </Typography>
      </div>
      <Progress
              color={color ? color : "light-blue"}
              value={value} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      />
    </div>
  );
};

export default SkillProgress;