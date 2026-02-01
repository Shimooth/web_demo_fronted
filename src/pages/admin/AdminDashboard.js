import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/news', name: '新闻管理', icon: '📰' },
    { path: '/admin/innovation', name: '创新创业', icon: '💡' },
    { path: '/admin/enterprise-service', name: '企业服务', icon: '🏢' },
    { path: '/admin/policies', name: '政策管理', icon: '📋' },
    { path: '/admin/downloads', name: '资料管理', icon: '📁' },
    { path: '/admin/carousel', name: '轮播图管理', icon: '🖼️' },
    { path: '/admin/friend-links', name: '友情链接', icon: '🔗' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">后台管理</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">欢迎，管理员</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-2">点击进入管理页面</p>
            </button>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-600 mb-2">新闻总数</h3>
            <p className="text-3xl font-bold text-primary-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-600 mb-2">创新创业</h3>
            <p className="text-3xl font-bold text-primary-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-600 mb-2">企业服务</h3>
            <p className="text-3xl font-bold text-secondary-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-600 mb-2">政策/资料</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
