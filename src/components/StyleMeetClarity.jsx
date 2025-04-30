"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function StyleMeetClarity() {
  const [scale, setScale] = useState(1);
  const [imageWidth, setImageWidth] = useState("160px");
  const [isInView, setIsInView] = useState(false); // Track if the element is in view

  useEffect(() => {
    // Create an IntersectionObserver to track when the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting); // Update state based on visibility
      },
      {
        rootMargin: "0px", // You can adjust the margin if needed
      }
    );

    const targetElement = document.getElementById("styleMeetClaritySection");
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isInView) { 
        const scrollY = window.scrollY;
        const maxScroll = 700;
        const progress = Math.min(scrollY / maxScroll, 1);

        const newScale = 1 + progress * 0.5;
        const newWidth = `${160 + progress * (window.innerWidth - 160)}px`;

        setScale(newScale);
        setImageWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]); 

  return (
    <div id="styleMeetClaritySection" className="h-[100vh] bg-[#0a0a0e] text-white overflow-x-hidden relative">
      <div className="sticky top-0 min-h-[653px] h-auto flex flex-col items-center justify-center">
        <div className="mb-8">
          <span className="px-4 py-2 bg-gray-800 rounded-full text-sm flex items-center space-x-2">
            <span className="text-blue-400">★</span>
            <span>Style Meets Clarity</span>
          </span>
        </div>

        <div className="flex items-center justify-center w-full gap-10">
          <h1 className="text-6xl font-serif">Vision</h1>

          <div
            className="transition-all duration-700 ease-in-out max-w-[100vw] overflow-hidden"
            style={{ transform: `scale(${scale})`, width: imageWidth }}
          >
            <Image
              src="/stylemeetclarity.jpg"
              alt="Glasses"
              width={1000}
              height={600}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          <h1 className="text-6xl font-serif">Nova</h1>
        </div>

        <p className="mt-16 text-center text-sm max-w-xl px-4">
          We're all about finding you that perfect pair. Experience the
          difference a perfect pair makes. Let’s find yours together.
        </p>
      </div>
    </div>
  );
}
