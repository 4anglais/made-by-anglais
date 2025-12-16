import React, { useEffect, useState } from 'react';
import './Loader.css';

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const animate = () => {
      setProgress((prev) => {
        if (prev < 100) {
          frame = requestAnimationFrame(animate);
          return prev + 2;
        } else {
          cancelAnimationFrame(frame);
          return 100;
        }
      });
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Animate color from white to red as progress increases
  const fillColor = `rgb(${255}, ${255 - Math.round(progress * 2.55)}, ${255 - Math.round(progress * 2.55)})`;
  return (
    <div className="loader-container">
      <svg viewBox="0 0 600 120" className="loader-svg">
        <defs>
          <clipPath id="fill-clip">
            <rect x="0" y={120 - (progress * 1.2)} width="600" height={progress * 1.2} />
          </clipPath>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="loader-fill"
          style={{ clipPath: 'url(#fill-clip)', fill: fillColor }}
        >
          MadeByAngel
        </text>
      </svg>
      <div className="progress-indicator">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Loader;
