import React from 'react';

function PartyBuildingPage() {
  const partyBuildingList = [
    { 
      id: 1, 
      title: '园区党委组织开展"学习贯彻党的二十大精神"专题学习活动', 
      date: '2024-01-15', 
      category: '党建活动',
      image: 'https://via.placeholder.com/300x200/e74c3c/ffffff?text=党建活动'
    },
    { 
      id: 2, 
      title: '园区党支部召开2024年度党建工作部署会议', 
      date: '2024-01-10', 
      category: '党建动态',
      image: 'https://via.placeholder.com/300x200/c0392b/ffffff?text=党建动态'
    },
    { 
      id: 3, 
      title: '园区企业党员代表参加"不忘初心、牢记使命"主题教育活动', 
      date: '2024-01-08', 
      category: '党建活动',
      image: 'https://via.placeholder.com/300x200/a93226/ffffff?text=党建活动'
    },
    { 
      id: 4, 
      title: '园区党委组织观看红色电影《建党伟业》', 
      date: '2024-01-05', 
      category: '党建活动',
      image: 'https://via.placeholder.com/300x200/922b21/ffffff?text=党建活动'
    },
    { 
      id: 5, 
      title: '园区党支部开展"我为群众办实事"实践活动', 
      date: '2024-01-03', 
      category: '党建动态',
      image: 'https://via.placeholder.com/300x200/7b241c/ffffff?text=党建动态'
    },
  ];

  const categories = ['全部', '党建活动', '党建动态', '理论学习', '组织建设'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">园区党建</h1>
          <p className="text-gray-600">加强党的建设，推动园区高质量发展</p>
        </div>

        {/* 分类筛选 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category === '全部'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 党建内容列表 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partyBuildingList.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium mt-3">
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 分页 */}
          <div className="mt-8 flex justify-center space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              上一页
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded">1</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              3
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              下一页
            </button>
          </div>
        </div>

        {/* 党建亮点 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">理论学习</h3>
            <p className="text-gray-600 text-sm">深入学习党的理论，提高政治素养</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">组织建设</h3>
            <p className="text-gray-600 text-sm">加强基层党组织建设，发挥战斗堡垒作用</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">实践活动</h3>
            <p className="text-gray-600 text-sm">开展丰富多样的党建实践活动</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartyBuildingPage;
