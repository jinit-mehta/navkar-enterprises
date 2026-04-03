import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis smooth scroll disabled due to user feedback regarding 
    // glitchy/sticky behavior and slow scroll speed.
    // Relying on native browser scrolling instead.
  }, []);

  return lenisRef;
};