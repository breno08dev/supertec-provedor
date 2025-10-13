// src/hooks/useIntersectionObserver.tsx
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: IntersectionObserverOptions = { threshold: 0.1, triggerOnce: true }
): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold: options.threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.triggerOnce, options.threshold]);

  return [elementRef, isVisible];
};