import { useEffect, useRef, useState } from 'react';

interface UseCarouselProps {
  count: number;
  width: number;
  stepsCount: number;
}

const useCarousel = ({ count, width, stepsCount }: UseCarouselProps) => {
  const [step, setStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
    
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: width * step,
      behavior: 'smooth',
    });
  }, [step, width]);
      
  const handleClickPlusStep = (index: number | null) => {
    if (stepsCount === 1) return;
    if (index !== null) setStep(() => index);
    else setStep((prev) => (prev + 1) % count);
  };
    
  const handleClickMinusStep = () => {
    if (stepsCount === 1) return;
    setStep((prev) => (prev - 1 + count) % count);
  };

  return { step, containerRef, handleClickPlusStep, handleClickMinusStep };
};

export default useCarousel;