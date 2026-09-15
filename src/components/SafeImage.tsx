import React, { useState, useEffect, useRef } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  onLoadSuccess?: () => void;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc = '/images/dental-care-1.jpg',
  alt,
  className = '',
  objectPosition = 'center',
  onLoadSuccess,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Sync currentSrc when src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  // Check if image is already cached/complete
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      onLoadSuccess?.();
    }
  }, [currentSrc, onLoadSuccess]);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoadSuccess?.();
  };

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      <img
        {...props}
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading="eager"
        decoding="async"
        style={{ objectPosition, ...props.style }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-90'
        } ${props.className || ''}`}
      />
    </div>
  );
};
