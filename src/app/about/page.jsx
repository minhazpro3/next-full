"use client"
import { useState, useEffect } from "react";

export default function Page() {
  const [bubbles, setBubbles] = useState([]);
  const [shooterPosition, setShooterPosition] = useState(50);

  useEffect(() => {
    // Initialize bubbles
    const initialBubbles = Array(60)
      .fill(null)
      .map((_, i) => ({
        id: i,
        color: ["red", "blue", "green", "yellow"][
          Math.floor(Math.random() * 4)
        ],
        x: (i % 10) * 10,
        y: Math.floor(i / 10) * 10,
        popped: false,
      }));
    setBubbles(initialBubbles);
  }, []);

  const shootBubble = () => {
    // Handle bubble shooting logic
    console.log("Shooting bubble from position:", shooterPosition);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="relative w-[300px] h-[400px] bg-gray-300 border border-gray-600">
        {bubbles.map(
          (bubble) =>
            !bubble.popped && (
              <div
                key={bubble.id}
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                }}
                className={`absolute w-8 h-8 rounded-full bg-${bubble.color}-500`}
              ></div>
            )
        )}
      </div>
      <div className="flex mt-4 items-center">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setShooterPosition((prev) => Math.max(0, prev - 10))}
        >
          Left
        </button>
        <div className="mx-4">Shooter: {shooterPosition}%</div>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setShooterPosition((prev) => Math.min(100, prev + 10))}
        >
          Right
        </button>
      </div>
      <button
        className="p-2 mt-4 bg-green-500 text-white rounded"
        onClick={shootBubble}
      >
        Shoot
      </button>
    </div>
  );
}
