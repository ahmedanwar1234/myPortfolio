"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({children}) => {
  const cursorRef = useRef();

  useEffect(() => {
    // Move cursor
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: clientX - 10,
          y: clientY - 10,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    // Hover scale effect for elements with class 'hover-text'
    const handleHoverEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleHoverLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Attach hover listeners globally to all elements with class 'hover-text'
    const hoverElements = document.querySelectorAll(".hover-text");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed max-md:hidden top-0 left-0 w-[20px] h-[20px] rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
      />

      {/* Example usage */}
      <div className=" w-full flex items-center justify-center bg-black">
        <h1 className="text-white text-5xl font-bold hover-text">
         {children}
        </h1>
      </div>
    </>
  );
};

export default Cursor;
