import React from 'react';
import Carousel from '../components/Carousel';
import SmallCarousel from '../components/SmallCarousel';
import AwardsCarousel from '../components/AwardsCarousel';
import { Link } from 'react-router-dom';

function HomePage() {
  // 顶部大轮播图数据
  const carouselImages = [
    {
      src: '/images/carousel-1.jpg',
      alt: '园区发展',
      title: '宿迁大学科技园发展动态',
      description: '推动科技创新，促进产业发展'
    },
    {
      src: '/images/carousel-2.jpg',
      alt: '园区建设',
      title: '科技园区建设成果',
      description: '打造现代化科技产业园区'
    },
  ];

  // 轮播图新闻数据（带封面图片）
  const carouselNews = [
    {
      id: 1,
      title: '宿迁大学科技园举办科技创新政策解读会',
      date: '2024-01-15',
      coverImage: '/images/org/image1.jpg',
      link: '/news'
    },
    {
      id: 2,
      title: '园区企业与高校签署产学研合作协议',
      date: '2024-01-08',
      coverImage: '/images/org/image2.jpg',
      link: '/news'
    },
    {
      id: 3,
      title: '科技创新成果转化项目路演活动成功举办',
      date: '2024-01-05',
      coverImage: '/images/org/image3.jpg',
      link: '/news'
    },
  ];

  // 标题新闻数据
  const titleNews = [
    { id: 1, title: '2024年度科技项目申报工作正式启动', date: '2024-01-10' },
    { id: 2, title: '园区举办企业创新管理培训活动', date: '2024-01-08' },
    { id: 3, title: '科技园区新增入驻企业10家', date: '2024-01-05' },
    { id: 4, title: '园区开展安全生产大检查', date: '2024-01-03' },
    { id: 5, title: '科技创新成果展示会圆满结束', date: '2024-01-01' },
  ];

  // 通知公告数据
  const announcements = [
    { id: 1, title: '关于申报2024年度科技项目的通知', date: '2024-01-10' },
    { id: 2, title: '关于组织开展科技型企业认定工作的通知', date: '2024-01-03' },
    { id: 3, title: '关于园区企业年度考核的通知', date: '2023-12-28' },
    { id: 4, title: '关于科技项目资金申报的补充通知', date: '2023-12-25' },
    { id: 5, title: '关于园区停车管理规定的重要通知', date: '2023-12-20' },
  ];

  // 园区党建数据
  const partyBuildingNews = [
    {
      id: 1,
      title: '园区党委组织开展"学习贯彻党的二十大精神"专题学习活动',
      date: '2024-01-15',
      image: '/images/org/image4.jpg'
    },
    {
      id: 2,
      title: '园区党支部召开2024年度党建工作部署会议',
      date: '2024-01-10',
      image: '/images/org/image1.jpg'
    },
    {
      id: 3,
      title: '园区企业党员代表参加"不忘初心、牢记使命"主题教育活动',
      date: '2024-01-08',
      image: '/images/org/image2.jpg'
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* 轮播图 */}
      <Carousel images={carouselImages} />

      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：园区新闻 */}
          <div className="lg:col-span-2">
            {/* 园区新闻 - 分为左右两部分 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-2xl font-bold text-gray-800">园区新闻</h2>
                <Link to="/news" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 左侧：轮播图新闻 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">轮播图新闻</h3>
                  <SmallCarousel newsItems={carouselNews} />
                </div>

                {/* 右侧：标题新闻 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">标题新闻</h3>
                  <ul className="space-y-3">
                    {titleNews.map((news) => (
                      <li key={news.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div className="flex-1">
                          <Link to="/news" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                            {news.title}
                          </Link>
                          <span className="text-gray-500 text-xs ml-3">{news.date}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 通知公告 */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-2xl font-bold text-gray-800">通知公告</h2>
                <Link to="/policies" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </Link>
              </div>
              <ul className="space-y-4">
                {announcements.map((item) => (
                  <li key={item.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0">
                    <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div className="flex-1">
                      <Link to="/policies" className="text-gray-700 hover:text-primary-600 transition-colors">
                        {item.title}
                      </Link>
                      <span className="text-gray-500 text-sm ml-4">{item.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 园区党建 */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h2 className="text-2xl font-bold text-gray-800">园区党建</h2>
                <Link to="/party-building" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partyBuildingNews.map((item) => (
                  <Link
                    key={item.id}
                    to="/party-building"
                    className="group"
                  >
                    <div className="relative h-32 overflow-hidden rounded-lg mb-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x200/cccccc/666666?text=图片加载失败';
                        }}
                      />
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-gray-500 text-xs">{item.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：园区概况、快速链接等 */}
          <div className="space-y-6">
            {/* 园区概况 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">园区概况</h2>
              <div className="mb-4">
                <img
                  src="/images/carousel-2.jpg"
                  alt="园区概况"
                  className="w-full h-auto rounded-lg shadow-sm mb-4"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250/cccccc/666666?text=图片加载失败';
                  }}
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
              宿迁大学科技园致力于推动科技创新，促进产业发展，为企业提供优质的科技服务和政策支持。
              </p>
              <a
                href="/park-overview"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                了解更多 ›
              </a>
            </div>

            {/* 政策法规 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">政策法规</h2>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                      • 科技创新支持政策
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/policies"
                className="text-primary-600 hover:text-primary-700 text-sm mt-3 block"
              >
                查看全部 ›
              </a>
            </div>

            {/* 资料下载 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">资料下载</h2>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors text-sm">
                      • 项目申报表格
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/downloads"
                className="text-primary-600 hover:text-primary-700 text-sm mt-3 block"
              >
                查看全部 ›
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 资质荣誉模块 */}
      <AwardsCarousel />
    </div>
  );
}

export default HomePage;
