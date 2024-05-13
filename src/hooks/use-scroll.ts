import { useLayoutEffect, useState } from 'react';

export function useScroll(): [number, number] {
  const [scroll, setScroll] = useState(0);
  const [direction, setDirection] = useState(0);

  useLayoutEffect(() => {
    function update(e: { deltaY: number }) {
      setScroll(window.scrollY);
      setDirection(Math.sign(e.deltaY));
    }

    window.addEventListener('wheel', update);
    update({ deltaY: 0 });
    
    return () => window.removeEventListener('wheel', update);
  }, []);

  return [scroll, direction];
}