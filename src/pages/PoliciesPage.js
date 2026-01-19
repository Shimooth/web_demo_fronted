import React from 'react';

function PoliciesPage() {
  const policies = [
    { id: 1, title: '科技创新支持政策', date: '2024-01-15', type: '国家政策' },
    { id: 2, title: '高新技术企业认定管理办法', date: '2024-01-10', type: '地方政策' },
    { id: 3, title: '科技成果转化实施细则', date: '2024-01-08', type: '地方政策' },
    { id: 4, title: '科技项目申报指南', date: '2024-01-05', type: '规范性文件' },
    { id: 5, title: '知识产权保护相关规定', date: '2024-01-03', type: '国家政策' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">政策法规</h1>
          
          <div className="space-y-4">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 p-3 rounded transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-secondary-600 rounded-full flex-shrink-0"></span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">
                        {policy.type}
                      </span>
                      <span className="text-gray-500 text-sm">{policy.date}</span>
                    </div>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-primary-600 transition-colors text-lg font-medium"
                    >
                      {policy.title}
                    </a>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-700 px-4 py-2 border border-primary-600 rounded hover:bg-primary-50 transition-colors">
                  查看详情
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoliciesPage;
