import { useEffect, useRef, useState } from 'react';

const useCarousel = ({ count, width }: { count: number; width: number }) => {
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
    if (index !== null) setStep(() => index);
    else setStep((prev) => (prev + 1) % count);
  };
    
  const handleClickMinusStep = () => {
    setStep((prev) => (prev - 1 + count) % count);
  };

  return { step, containerRef, handleClickPlusStep, handleClickMinusStep };
};

export default useCarousel;