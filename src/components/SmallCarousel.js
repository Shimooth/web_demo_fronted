import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SmallCarousel({ newsItems = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (newsItems.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [newsItems.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  if (newsItems.length === 0) {
    return (
      <div className="relative w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">暂无轮播图新闻</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 overflow-hidden bg-gray-100 rounded-lg">
      {newsItems.map((news, index) => (
        <Link
          key={news.id}
          to={news.link || '/news'}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={news.coverImage}
              alt={news.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x200/cccccc/666666?text=图片加载失败';
              }}
            />
            {/* 文字覆盖层 */}
            <div className="absolute bottom-0 left-0 right-0 text-white pointer-events-none z-10 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-sm font-semibold drop-shadow-lg line-clamp-2">{news.title}</h3>
              {news.date && (
                <p className="mt-1 text-xs opacity-90 drop-shadow-lg">{news.date}</p>
              )}
            </div>
          </div>
        </Link>
      ))}

      {/* Previous Button */}
      {newsItems.length > 1 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            goToPrevious();
          }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 px-2 py-2 rounded-full transition-all shadow-lg z-20"
          aria-label="上一张"
        >
          <span className="text-lg">‹</span>
        </button>
      )}

      {/* Next Button */}
      {newsItems.length > 1 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            goToNext();
          }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 px-2 py-2 rounded-full transition-all shadow-lg z-20"
          aria-label="下一张"
        >
          <span className="text-lg">›</span>
        </button>
      )}

      {/* Dots Indicator */}
      {newsItems.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                goToSlide(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white shadow-lg scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`跳转到第 ${index + 1} 张`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SmallCarousel;
