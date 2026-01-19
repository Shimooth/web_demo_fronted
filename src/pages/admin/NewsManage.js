import React, { useState } from 'react';

function NewsManage() {
  const [newsList, setNewsList] = useState([
    { id: 1, title: '高新区科技局举办科技创新政策解读会', date: '2024-01-15', category: '新闻动态' },
    { id: 2, title: '2024年度科技项目申报工作正式启动', date: '2024-01-10', category: '通知公告' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">新闻管理</h1>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              + 添加新闻
            </button>
          </div>

          {/* 新闻列表 */}
          <div className="space-y-4">
            {newsList.map((news) => (
              <div
                key={news.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{news.title}</h3>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                    编辑
                  </button>
                  <button className="text-red-600 hover:text-red-700 px-3 py-1 border border-red-600 rounded hover:bg-red-50 transition-colors">
                    删除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsManage;
