"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Item = {
  key: string;
  src: string;
  width: number;
  height: number;
};

type VisibleState = {
  [key: string]: boolean;
};

type Position = {
  top: number;
  left: number;
};

type PositionsState = {
  [key: string]: Position;
};

const initialPositions = {
  apple: { top: -80, left: Math.random() * 500 },
  ball: { top: -80, left: Math.random() * 500 },
  orange: { top: -80, left: Math.random() * 500 },
  corn: { top: -80, left: Math.random() * 500 },
  lily: { top: -80, left: Math.random() * 500 },
  watermelon: { top: -80, left: Math.random() * 500 },
  pumpkin: { top: -80, left: Math.random() * 500 },
};

const items: Item[] = [
  { key: "apple", src: "/Apple.png", width: 80, height: 80 },
  { key: "ball", src: "/Ball.png", width: 80, height: 80 },
  { key: "orange", src: "/Orange.png", width: 90, height: 90 },
  { key: "corn", src: "/Corn.png", width: 80, height: 80 },
  { key: "lily", src: "/Lily.png", width: 80, height: 80 },
  { key: "watermelon", src: "/Watermelon.png", width: 80, height: 80 },
  { key: "pumpkin", src: "/Pumpkin.png", width: 80, height: 80 },
];

export function Gifts() {
  const [positions, setPositions] = useState<PositionsState>(initialPositions);
  const [visible, setVisible] = useState<VisibleState>({
    apple: false,
    ball: false,
    orange: false,
    corn: false,
    lily: false,
    watermelon: false,
    pumpkin: false,
  });

  useEffect(() => {
    items.forEach((item, index) => {
      setTimeout(() => {
        setVisible((prevState) => ({
          ...prevState,
          [item.key]: true,
        }));
        setPositions((prevState) => ({
          ...prevState,
          [item.key]: { top: -80, left: Math.random() * 500 },
        }));
      }, index * 1000);
    });
  }, []);

  const handleClick = (itemKey: string) => {
    setVisible((prevState) => ({
      ...prevState,
      [itemKey]: false,
    }));
    setTimeout(() => {
      setVisible((prevState) => ({
        ...prevState,
        [itemKey]: true,
      }));
      setPositions((prevState) => ({
        ...prevState,
        [itemKey]: { top: -80, left: Math.random() * 500 },
      }));
    }, 100);
  };

  return (
    <div className="fixed top-0 left-0 z-30 h-screen overflow-hidden w-full opacity-100">
      {items.map(
        (item) =>
          visible[item.key] &&
          positions[item.key] && (
            <Image
              key={item.key}
              src={item.src}
              alt={item.key}
              width={item.width}
              height={item.height}
              className="absolute fall"
              style={{
                top: positions[item.key].top,
                left: positions[item.key].left,
              }}
              onClick={() => handleClick(item.key)}
            />
          )
      )}
    </div>
  );
}
