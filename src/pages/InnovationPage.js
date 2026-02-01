import React from 'react';
import { Link } from 'react-router-dom';

function InnovationPage() {
  const innovationList = [
    { id: 1, title: '园区举办创新创业大赛路演活动', date: '2024-01-15', category: '创业大赛', image: 'https://via.placeholder.com/300x200/0ea5e9/ffffff?text=创业大赛' },
    { id: 2, title: '孵化器入驻项目签约仪式成功举行', date: '2024-01-10', category: '孵化动态', image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=孵化动态' },
    { id: 3, title: '创业导师沙龙：商业模式与融资策略', date: '2024-01-08', category: '创业沙龙', image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=创业沙龙' },
    { id: 4, title: '园区众创空间开放日暨项目路演', date: '2024-01-05', category: '众创空间', image: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=众创空间' },
    { id: 5, title: '科技创新成果转化对接会', date: '2024-01-03', category: '成果转化', image: 'https://via.placeholder.com/300x200/14b8a6/ffffff?text=成果转化' },
  ];

  const categories = ['全部', '创业大赛', '孵化动态', '创业沙龙', '众创空间', '成果转化'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">创新创业</h1>
          <p className="text-gray-600">推动创新创业，助力企业发展</p>
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
            {innovationList.map((item) => (
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
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
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
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">创业孵化</h3>
            <p className="text-gray-600 text-sm">提供场地、资金、导师等全方位创业支持</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">创新培训</h3>
            <p className="text-gray-600 text-sm">定期举办创业沙龙、路演与培训活动</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">资源对接</h3>
            <p className="text-gray-600 text-sm">对接投融资、产业链与政策资源</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovationPage;
