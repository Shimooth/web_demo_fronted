import React from 'react';

function NewsPage() {
  const newsList = [
    { id: 1, title: '宿迁大学科技园举办科技创新政策解读会', date: '2024-01-15', category: '新闻动态' },
    { id: 2, title: '2024年度科技项目申报工作正式启动', date: '2024-01-10', category: '通知公告' },
    { id: 3, title: '园区企业与高校签署产学研合作协议', date: '2024-01-08', category: '新闻动态' },
    { id: 4, title: '科技创新成果转化项目路演活动成功举办', date: '2024-01-05', category: '新闻动态' },
    { id: 5, title: '关于组织开展科技型企业认定工作的通知', date: '2024-01-03', category: '通知公告' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">园区新闻</h1>
          
          <div className="space-y-4">
            {newsList.map((news) => (
              <div
                key={news.id}
                className="flex items-start border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 p-3 rounded transition-colors"
              >
                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-primary-600 transition-colors text-lg font-medium block"
                  >
                    {news.title}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 分页 */}
          <div className="mt-8 flex justify-center space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              上一页
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded">1</button>
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
      </div>
    </div>
  );
}

export default NewsPage;
