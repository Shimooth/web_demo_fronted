import React from 'react';
import { Link } from 'react-router-dom';

function EnterpriseServicePage() {
  const serviceList = [
    { id: 1, title: '园区企业一站式服务平台正式上线', date: '2024-01-12', category: '平台服务', image: 'https://via.placeholder.com/300x200/0ea5e9/ffffff?text=平台服务' },
    { id: 2, title: '知识产权申报与维权服务指南', date: '2024-01-08', category: '知识产权', image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=知识产权' },
    { id: 3, title: '法律咨询与财税服务专场活动', date: '2024-01-05', category: '法务财税', image: 'https://via.placeholder.com/300x200/14b8a6/ffffff?text=法务财税' },
    { id: 4, title: '人力资源与招聘服务对接会', date: '2024-01-03', category: '人力资源', image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=人力资源' },
    { id: 5, title: '企业资质认定与项目申报辅导', date: '2023-12-28', category: '资质认定', image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=资质认定' },
  ];

  const categories = ['全部', '平台服务', '知识产权', '法务财税', '人力资源', '资质认定'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">企业服务</h1>
          <p className="text-gray-600">为企业提供一站式服务，助力企业成长</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category === '全部'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceList.map((item) => (
              <Link
                key={item.id}
                to="#"
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200/cccccc/666666?text=图片加载失败';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-gray-500 text-sm">{item.date}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-primary-600 text-sm font-medium">查看详情 →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              上一页
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded">1</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              下一页
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">政策咨询</h3>
            <p className="text-gray-600 text-sm">政策解读、申报辅导、资质认定服务</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">法务财税</h3>
            <p className="text-gray-600 text-sm">法律咨询、财税代理、知识产权服务</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">人才服务</h3>
            <p className="text-gray-600 text-sm">招聘对接、培训服务、人才政策咨询</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseServicePage;
