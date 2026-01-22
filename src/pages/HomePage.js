import React from 'react';
import Carousel from '../components/Carousel';

function HomePage() {
  // 轮播图数据
  const carouselImages = [
    {
      src: '/images/carousel-1.jpg',
      alt: '园区发展',
      title: '宿迁大学科技园发展动态',
      description: '推动科技创新，促进产业发展'
    },
    {
      src: '/images/carousel-2.jpg',
      alt: '园区建设',
      title: '科技园区建设成果',
      description: '打造现代化科技产业园区'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 轮播图 */}
      {/* <div className="mt-4">
        <Carousel images={carouselImages} />
      </div> */}
      <Carousel images={carouselImages} />

      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：园区新闻 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-2xl font-bold text-gray-800">园区新闻</h2>
                <a href="/news" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </a>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="flex items-start border-b border-gray-100 pb-3 last:border-0">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div className="flex-1">
                      <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                        宿迁大学科技园举办科技创新政策解读会
                      </a>
                      <span className="text-gray-500 text-sm ml-4">2024-01-15</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 通知公告 */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-2xl font-bold text-gray-800">通知公告</h2>
                <a href="/policies" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </a>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li key={item} className="flex items-start border-b border-gray-100 pb-3 last:border-0">
                    <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div className="flex-1">
                      <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                        关于申报2024年度科技项目的通知
                      </a>
                      <span className="text-gray-500 text-sm ml-4">2024-01-10</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 右侧：园区概况、快速链接等 */}
          <div className="space-y-6">
            {/* 园区概况 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">园区概况</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
              宿迁大学科技园致力于推动科技创新，促进产业发展，为企业提供优质的科技服务和政策支持。
              </p>
              <a
                href="/park-overview"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                了解更多 ›
              </a>
            </div>

            {/* 政策法规 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">政策法规</h2>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                      • 科技创新支持政策
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/policies"
                className="text-primary-600 hover:text-primary-700 text-sm mt-3 block"
              >
                查看全部 ›
              </a>
            </div>

            {/* 资料下载 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">资料下载</h2>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                      • 项目申报表格
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/downloads"
                className="text-primary-600 hover:text-primary-700 text-sm mt-3 block"
              >
                查看全部 ›
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
