import React from 'react';

function DownloadsPage() {
  const downloads = [
    { id: 1, name: '项目申报表格', size: '256 KB', date: '2024-01-15', type: '表格' },
    { id: 2, name: '企业认定申请书', size: '128 KB', date: '2024-01-10', type: '文档' },
    { id: 3, name: '科技成果转化申报材料', size: '512 KB', date: '2024-01-08', type: '文档' },
    { id: 4, name: '政策解读PPT', size: '2.5 MB', date: '2024-01-05', type: '演示文稿' },
    { id: 5, name: '申报指南手册', size: '1.2 MB', date: '2024-01-03', type: '文档' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">资料下载</h1>
          
          <div className="space-y-4">
            {downloads.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 p-3 rounded transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {item.type}
                      </span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                      <span className="text-gray-500 text-sm">{item.size}</span>
                    </div>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-primary-600 transition-colors text-lg font-medium"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700 px-4 py-2 border border-primary-600 rounded hover:bg-primary-50 transition-colors">
                  下载
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadsPage;
