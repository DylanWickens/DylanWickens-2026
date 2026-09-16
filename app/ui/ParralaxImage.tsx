"use client";

import {useEffect, useRef } from "react";
import Link from "next/link";

interface ParralaxImageProps {
  children: React.ReactNode;
  delay: number;
  href: string;
}

export default function ParralaxImage({children, delay, href}: ParralaxImageProps) {
     const myRef = useRef<HTMLDivElement>(null);
     useEffect(() => {
       const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             entry.target.classList.add("parallaxImage");
           }
         });
       });
       if (myRef.current) {
         observer.observe(myRef.current);
       }
     }, [myRef]);
  return (
    <Link
      href={href}
      className="xl:col-start-6 xl:col-span-3 hover:scale-[1.005] transition-all duration-160 ease-in-out h-fit ">
      <div ref={myRef} className="opacity-0" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </div>
    </Link>
  );
}
