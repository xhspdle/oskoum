// 'use client';

// import { useEffect } from 'react'
// import useScroll from '@/hooks/useScroll'

// const ScrollHandler = ({ elementRef, className }) => {
//     const scrollPosition = useScroll();

//     console.log("scroll handler rerender");

//     useEffect(() => {
//         if(scrollPosition.y > 100) {
//             elementRef.current?.classList.add(className);
//         } else {
//             elementRef.current?.classList.remove(className);
//         }
//     }, [scrollPosition]);

//     return null;
// }

// export default ScrollHandler;