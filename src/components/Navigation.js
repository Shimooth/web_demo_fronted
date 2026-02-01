import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const location = useLocation();
  
  const navItems = [
    { path: '/', name: '首页' },
    { path: '/park-overview', name: '园区概况' },
    { path: '/news', name: '园区新闻' },
    { path: '/innovation', name: '创新创业' },
    { path: '/enterprise-service', name: '企业服务' },
    { path: '/policies', name: '政策法规' },
    { path: '/downloads', name: '资料下载' },
    { path: '/contact', name: '联系我们' },
  ];

  // 当路由变化时，关闭移动端菜单
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, setIsMobileMenuOpen]);

  // 点击导航项时关闭移动端菜单
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 桌面端导航栏 - 在 md 及以上屏幕显示 */}
      <nav className="hidden md:block bg-gradient-to-r from-primary-600 to-primary-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 py-4 text-white font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white bg-opacity-20 shadow-lg'
                      : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 移动端导航栏 - 在 md 以下屏幕显示，可通过按钮展开/收起 */}
      {isMobileMenuOpen && (
        <>
          {/* 背景遮罩层 */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleNavClick}
          />
          {/* 菜单内容 */}
          <nav className="md:hidden bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg fixed top-16 right-4 z-50 w-48 rounded-lg animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="px-4 py-3">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleNavClick}
                      className={`px-4 py-3 text-white font-medium transition-all duration-200 rounded-lg ${
                        isActive
                          ? 'bg-white bg-opacity-20 shadow-lg'
                          : 'hover:bg-white hover:bg-opacity-10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

export default Navigation;
