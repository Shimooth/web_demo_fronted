import React from 'react';

function ParkOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">园区概况</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">关于我们</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              宿迁市高新区科技局是负责推动高新区科技创新和产业发展的政府机构。
              我们致力于为企业提供优质的科技服务，推动科技成果转化，促进高新技术产业发展。
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">主要职能</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>负责高新区科技发展规划和政策制定</li>
              <li>推动科技创新和成果转化</li>
              <li>提供科技服务和政策咨询</li>
              <li>支持高新技术企业发展</li>
              <li>组织科技项目和人才引进</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">联系方式</h2>
            <div className="text-gray-600 space-y-2">
              <p><strong>地址：</strong>宿迁市高新区科技大厦</p>
              <p><strong>电话：</strong>0527-XXXXXXX</p>
              <p><strong>邮箱：</strong>contact@sqhitech.gov.cn</p>
              <p><strong>工作时间：</strong>周一至周五 9:00-17:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkOverviewPage;
