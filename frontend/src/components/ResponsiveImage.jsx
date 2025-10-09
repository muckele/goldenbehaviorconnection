import React, { useState } from 'react';

const ResponsiveImage = ({ 
  src, 
  alt, 
  fallbackText, 
  className = '', 
  containerClassName = '',
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`relative ${containerClassName}`}>
      {!imageError ? (
        <>
          <img
            src={src}
            alt={alt}
            className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
            {...props}
          />
          {!imageLoaded && (
            <div className={`absolute inset-0 bg-gray-100 rounded animate-pulse flex items-center justify-center`}>
              <div className="w-8 h-8 border-2 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
            </div>
          )}
        </>
      ) : (
        <div className={`${className} bg-gray-50 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-500 font-medium text-sm`}>
          {fallbackText}
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;