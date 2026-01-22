import React, { useState, useEffect, useRef, useCallback } from 'react';

function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagePositions, setImagePositions] = useState({});
  const containerRef = useRef(null);

  // 计算图片在容器中的实际显示位置和尺寸
  const calculateImagePosition = useCallback((img) => {
    if (!containerRef.current || !img.naturalWidth) return null;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    
    // 获取图片元素的实际渲染尺寸
    const imgElementWidth = imgRect.width;
    const imgElementHeight = imgRect.height;
    
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const imageRatio = naturalWidth / naturalHeight;
    
    // 计算图片内容在 img 元素内的实际显示尺寸（考虑 object-contain）
    const elementRatio = imgElementWidth / imgElementHeight;
    
    let displayWidth, displayHeight, contentOffsetX, contentOffsetY;
    
    if (imageRatio > elementRatio) {
      // 图片更宽，以元素宽度为准
      displayWidth = imgElementWidth;
      displayHeight = imgElementWidth / imageRatio;
      contentOffsetX = 0;
      contentOffsetY = (imgElementHeight - displayHeight) / 2;
    } else {
      // 图片更高，以元素高度为准
      displayHeight = imgElementHeight;
      displayWidth = imgElementHeight * imageRatio;
      contentOffsetX = (imgElementWidth - displayWidth) / 2;
      contentOffsetY = 0;
    }
    
    // 计算图片内容相对于容器的偏移量
    const imgOffsetInContainer = {
      left: imgRect.left - containerRect.left,
      top: imgRect.top - containerRect.top
    };
    
    const offsetX = imgOffsetInContainer.left + contentOffsetX;
    const offsetY = containerRect.height - (imgOffsetInContainer.top + contentOffsetY + displayHeight);
    
    return { displayWidth, displayHeight, offsetX, offsetY };
  }, []);

  const handleImageLoad = useCallback((e, index) => {
    const img = e.target;
    const position = calculateImagePosition(img);
    if (position) {
      setImagePositions(prev => ({
        ...prev,
        [index]: { ...position, img }
      }));
    }
  }, [calculateImagePosition]);

  // 窗口大小变化时重新计算位置
  useEffect(() => {
    const handleResize = () => {
      const newPositions = {};
      Object.keys(imagePositions).forEach(index => {
        const { img } = imagePositions[index];
        if (img) {
          const position = calculateImagePosition(img);
          if (position) {
            newPositions[index] = { ...position, img };
          }
        }
      });
      if (Object.keys(newPositions).length > 0) {
        setImagePositions(newPositions);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagePositions, calculateImagePosition]);

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
      <div ref={containerRef} className="relative w-full h-full max-w-[1920px] mx-auto flex items-center justify-center">
        {images.map((image, index) => {
          const position = imagePositions[index];
          return (
            <div
              key={`carousel-${index}-${image.src}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* 图片容器 */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt || `轮播图 ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onLoad={(e) => handleImageLoad(e, index)}
                />
              </div>
              {/* 文字覆盖层 - 根据图片实际位置定位，确保不超出图片区域 */}
              {image.title && position && (
                <div 
                  className="absolute text-white pointer-events-none z-10"
                  style={{
                    left: position.offsetX + 16,
                    bottom: position.offsetY + 16,
                    maxWidth: position.displayWidth - 32,
                    boxSizing: 'border-box'
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold drop-shadow-lg">{image.title}</h3>
                  {image.description && (
                    <p className="mt-2 text-sm md:text-base opacity-90 drop-shadow-lg">{image.description}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
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
