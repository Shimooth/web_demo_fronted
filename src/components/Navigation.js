import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', name: '首页' },
    { path: '/park-overview', name: '园区概况' },
    { path: '/news', name: '园区新闻' },
    { path: '/policies', name: '政策法规' },
    { path: '/downloads', name: '资料下载' },
    { path: '/contact', name: '联系我们' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-md">
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
  );
}

export default Navigation;
