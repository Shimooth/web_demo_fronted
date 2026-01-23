import React, { useState, useEffect } from 'react';

function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-[40vh] min-h-[300px] max-h-[600px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">暂无轮播图</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[40vh] min-h-[300px] max-h-[600px] overflow-hidden bg-gray-100">
      {/* 容器限制最大宽度，避免在大屏幕上过宽 */}
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        {images.map((image, index) => (
          <div
            key={`carousel-${index}-${image.src}`}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* 图片容器 - 使用 object-cover 让图片铺满容器 */}
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt || `轮播图 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* 文字覆盖层 - 定位在底部 */}
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 text-white pointer-events-none z-10 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-xl md:text-2xl font-semibold drop-shadow-lg">{image.title}</h3>
                {image.description && (
                  <p className="mt-2 text-sm md:text-base opacity-90 drop-shadow-lg">{image.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 px-4 py-3 rounded-full transition-all shadow-lg z-10"
        aria-label="上一张"
      >
        <span className="text-2xl">‹</span>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 px-4 py-3 rounded-full transition-all shadow-lg z-10"
        aria-label="下一张"
      >
        <span className="text-2xl">›</span>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white shadow-lg scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`跳转到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
