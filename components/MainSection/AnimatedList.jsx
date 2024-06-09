"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedList = () => {
  const controls = useAnimation();
  const listRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const items = [
    <li className="text-5xl leading-[48px] text-start">Select an Avatar</li>,
    <li className="text-5xl leading-[48px]">Ceate or Generate Script</li>,
    <li className="text-5xl leading-[48px]">Select AI Voices</li>,
    <li className="text-5xl leading-[48px]">Publish</li>,
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      items.forEach((item, index) => {
        const isLastItem = index === items.length - 1;
        controls.start((i) => {
          if (i === index) {
            return {
              color: isLastItem
                ? ["#ffffff", "#5CC3FA"]
                : ["#ffffff", "#5CC3FA", "#ffffff"],
              transition: {
                duration: 2,
                delay: index * 1,
                times: isLastItem ? [0, 1] : [0, 0.7, 1],
              },
            };
          }
          // If the index doesn't match, return an empty object
          return {};
        });
      });
    }
  }, [isInView, controls, items]);

  return (
    <div ref={listRef}>
      {items.map((item, index) => (
        <motion.div
          key={item}
          custom={index}
          initial={{ color: "#ffffff" }}
          animate={controls}
          className="text-2xl mb-4">
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
