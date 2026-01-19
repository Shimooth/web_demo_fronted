import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <p className="text-gray-300">地址：宿迁市高新区科技大厦</p>
            <p className="text-gray-300">电话：0527-XXXXXXX</p>
            <p className="text-gray-300">邮箱：contact@sqhitech.gov.cn</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">园区概况</a></li>
              <li><a href="#" className="hover:text-white transition-colors">园区新闻</a></li>
              <li><a href="#" className="hover:text-white transition-colors">政策法规</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <p className="text-gray-300">扫描二维码关注微信公众号</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>版权所有 © {new Date().getFullYear()} 宿迁市高新区科技局 保留所有权利</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
