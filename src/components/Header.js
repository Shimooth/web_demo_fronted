import React from 'react';

function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/org/logo_text.jpg" 
              alt="宿迁大学科技园" 
              className="h-16 w-auto sm:h-20"
            />
          </div>
          
          {/* Search Box - 在小屏幕上隐藏 */}
          <div className="hidden md:flex flex-1 max-w-md ml-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="请输入您想搜索的内容"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded hover:bg-primary-700 transition-colors"
              >
                搜索
              </button>
            </div>
          </div>

          {/* 移动端菜单按钮 - 只在中小屏幕上显示 */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            aria-label="切换菜单"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
