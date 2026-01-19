import React from 'react';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">联系我们</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 联系信息 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">联系信息</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">地址</h3>
                  <p>宿迁市高新区科技大厦</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">电话</h3>
                  <p>0527-XXXXXXX</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">邮箱</h3>
                  <p>contact@sqhitech.gov.cn</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">工作时间</h3>
                  <p>周一至周五：9:00 - 17:00</p>
                  <p>周末及节假日：休息</p>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">留言反馈</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">电话</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入您的联系电话"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">邮箱</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入您的邮箱"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">留言内容</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入您的留言内容"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
