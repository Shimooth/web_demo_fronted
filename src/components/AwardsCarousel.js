import React, { useEffect, useRef } from 'react';

function AwardsCarousel() {
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);

  // 资质荣誉图片列表
  const awardsImages = [
    '/images/awards/award-1.jpg',
    '/images/awards/award-2.jpg',
    '/images/awards/award-3.jpg',
    '/images/awards/award-4.jpg',
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // 滚动速度

    const animate = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // 计算单个图片组的宽度（包括gap）
        const itemWidth = 256 + 24; // w-64 (256px) + gap-6 (24px)
        const groupWidth = itemWidth * awardsImages.length;
        
        // 当滚动到第一组结束时，重置位置（无缝循环）
        if (scrollPosition >= groupWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [awardsImages.length]);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">资质荣誉</h2>
        
        {/* 滚动容器，带淡入淡出遮罩 */}
        <div className="relative">
          {/* 左侧淡入遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* 右侧淡出遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* 滚动区域 */}
          <div
            ref={scrollRef}
            className="overflow-x-hidden flex gap-6"
            style={{
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* 第一组图片 */}
            {awardsImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-64 h-48 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={image}
                  alt={`资质荣誉 ${index + 1}`}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/256x192/cccccc/666666?text=图片加载失败';
                  }}
                />
              </div>
            ))}
            
            {/* 第二组图片（无缝循环） */}
            {awardsImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-64 h-48 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={image}
                  alt={`资质荣誉 ${index + 1}`}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/256x192/cccccc/666666?text=图片加载失败';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsCarousel;
