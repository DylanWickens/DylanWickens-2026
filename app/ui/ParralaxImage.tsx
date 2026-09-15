"use client";

import {useEffect, useRef } from "react";

export default function ParralaxImage({children, delay}: {children: React.ReactNode, delay: number}) {
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
    <div ref={myRef} className='opacity-0' style={{animationDelay: `${delay}ms`}}>{children}</div>
  )
}
