import React, { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  speed?: number; // ms per character (default 24ms for titles, 14ms for paragraphs)
  delay?: number; // initial delay in ms
  showCursor?: boolean;
  onComplete?: () => void;
  triggerKey?: string | number; // re-run animation if this changes (e.g. slide change)
  threshold?: number; // IntersectionObserver threshold
  bengaliScript?: boolean;
}

export const TypingText: React.FC<TypingTextProps> = ({
  text,
  as: Component = 'span',
  className = '',
  speed,
  delay = 0,
  showCursor = true,
  onComplete,
  triggerKey,
  threshold = 0.15,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const elementRef = useRef<HTMLElement>(null);

  // Compute default speed based on text length to keep it snappy and intentional
  const computedSpeed =
    speed ??
    (text.length < 30 ? 25 : text.length < 90 ? 16 : 10);

  // IntersectionObserver to start when visible
  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(text);
      setIsFinished(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerKey]);

  // Handle typing animation
  useEffect(() => {
    if (!hasStarted) return;

    setDisplayedText('');
    setIsFinished(false);
    setIsTyping(false);

    let charIndex = 0;
    let timer: NodeJS.Timeout | null = null;
    let delayTimeout: NodeJS.Timeout | null = null;

    delayTimeout = setTimeout(() => {
      setIsTyping(true);

      timer = setInterval(() => {
        if (charIndex < text.length) {
          // Type characters
          charIndex++;
          setDisplayedText(text.slice(0, charIndex));
        } else {
          if (timer) clearInterval(timer);
          setIsTyping(false);
          setIsFinished(true);
          onComplete?.();
        }
      }, computedSpeed);
    }, delay);

    return () => {
      if (delayTimeout) clearTimeout(delayTimeout);
      if (timer) clearInterval(timer);
    };
  }, [text, hasStarted, delay, computedSpeed, triggerKey]);

  return (
    <Component
      ref={elementRef as unknown as React.RefObject<HTMLHeadingElement>}
      className={`relative inline-block ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">
        {displayedText}
        {showCursor && !isFinished && isTyping && (
          <span className="inline-block w-[2px] h-[0.85em] align-baseline ml-0.5 bg-teal-400 animate-pulse" />
        )}
      </span>
      {/* Invisible original text to reserve layout height and prevent reflow jump */}
      <span className="sr-only">{text}</span>
    </Component>
  );
};
