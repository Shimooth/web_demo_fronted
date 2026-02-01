import React from 'react';
import Carousel from '../components/Carousel';
import SmallCarousel from '../components/SmallCarousel';
import AwardsCarousel from '../components/AwardsCarousel';
import FriendLinksSection from '../components/FriendLinksSection';
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

  // 创新创业数据
  const innovationNews = [
    { id: 1, title: '园区举办创新创业大赛路演活动', date: '2024-01-15', image: '/images/org/image1.jpg' },
    { id: 2, title: '孵化器入驻项目签约仪式成功举行', date: '2024-01-10', image: '/images/org/image2.jpg' },
    { id: 3, title: '创业导师沙龙：商业模式与融资策略', date: '2024-01-08', image: '/images/org/image3.jpg' },
  ];

  // 企业服务数据
  const enterpriseServiceNews = [
    { id: 1, title: '园区企业一站式服务平台正式上线', date: '2024-01-12', image: '/images/org/image2.jpg' },
    { id: 2, title: '知识产权申报与维权服务指南', date: '2024-01-08', image: '/images/org/image4.jpg' },
    { id: 3, title: '法律咨询与财税服务专场活动', date: '2024-01-05', image: '/images/org/image1.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 轮播图 - 宽度与下方内容区对齐 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel images={carouselImages} />
      </div>

      {/* 主要内容区域 - 白底与背景融为一体，标题/下划线/圆点与导航栏色一致 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* 第1行：园区新闻 | 园区概况 */}
          <div className="lg:col-span-2 min-h-0 flex">
            <div className="bg-white p-6 w-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b-2 border-primary-600 pb-2">
                <h2 className="text-xl font-bold text-primary-600">园区新闻</h2>
                <Link to="/news" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <SmallCarousel newsItems={carouselNews} />
                </div>
                <div>
                  <ul className="space-y-3">
                    {titleNews.map((news) => (
                      <li key={news.id} className="flex items-start pb-2 last:pb-0">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
          </div>

          {/* 第1行右侧：园区概况 */}
          <div className="min-h-0 flex">
            <div className="bg-white p-6 w-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b-2 border-primary-600 pb-2">
                <h2 className="text-xl font-bold text-primary-600">园区概况</h2>
                <a href="/park-overview" className="text-primary-600 hover:text-primary-700 text-sm">
                  了解更多 ›
                </a>
              </div>
              <div className="mb-4">
                <img
                  src="/images/carousel-2.jpg"
                  alt="园区概况"
                  className="w-full h-auto mb-4"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250/cccccc/666666?text=图片加载失败';
                  }}
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 flex-1">
              宿迁大学科技园致力于推动科技创新，促进产业发展，为企业提供优质的科技服务和政策支持。
              </p>
            </div>
          </div>

          {/* 第2行：通知公告 | 政策法规 */}
          <div className="lg:col-span-2 min-h-0 flex">
            <div className="bg-white p-6 w-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b-2 border-primary-600 pb-2">
                <h2 className="text-xl font-bold text-primary-600">通知公告</h2>
                <Link to="/policies" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </Link>
              </div>
              <ul className="space-y-2 flex-1">
                {announcements.map((item) => (
                  <li key={item.id} className="flex items-start pb-2 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
          </div>
          <div className="min-h-0 flex">
            <div className="bg-white p-6 w-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b-2 border-primary-600 pb-2">
                <h2 className="text-xl font-bold text-primary-600">政策法规</h2>
                <Link to="/policies" className="text-primary-600 hover:text-primary-700 text-sm">
                  查看全部 ›
                </Link>
              </div>
              <ul className="space-y-2 flex-1">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start pb-2 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <a href="/policies" className="text-gray-700 hover:text-primary-600 transition-colors text-sm flex-1">
                      科技创新支持政策
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 第3行：创新创业 | 企业服务 */}
          <div className="lg:col-span-2 min-h-0 flex">
            <div className="bg-white p-6 w-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b-2 border-primary-600 pb-2">
                <h2 className="text-xl font-bold text-primary-600">创新创业</h2>
                <Link to="/innovation" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                {innovationNews.map((item) => (
                  <Link key={item.id} to="/innovation" className="group">
                    <div className="relative h-32 overflow-hidden mb-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x200/cccccc/666666?text=图片加载失败';
                        }}
                      />
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-gray-500 text-xs">{item.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="min-h-0 flex">
            <div className="bg-white p-6 w-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b-2 border-primary-600 pb-2">
                <h2 className="text-xl font-bold text-primary-600">企业服务</h2>
                <Link to="/enterprise-service" className="text-primary-600 hover:text-primary-700 text-sm">
                  更多 ›
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                {enterpriseServiceNews.map((item) => (
                  <Link key={item.id} to="/enterprise-service" className="group">
                    <div className="relative h-32 overflow-hidden mb-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x200/cccccc/666666?text=图片加载失败';
                        }}
                      />
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-gray-500 text-xs">{item.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 第4行：资料下载（通栏） */}
          <div className="lg:col-span-3 min-h-0 flex">
            <div className="bg-white p-6 w-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b-2 border-primary-600 pb-2">
                <h2 className="text-xl font-bold text-primary-600">资料下载</h2>
                <Link to="/downloads" className="text-primary-600 hover:text-primary-700 text-sm">
                  查看全部 ›
                </Link>
              </div>
              <ul className="space-y-2 flex-1">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start pb-2 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <a href="/downloads" className="text-gray-700 hover:text-primary-600 transition-colors text-sm flex-1">
                      项目申报表格
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 资质荣誉模块 */}
      <AwardsCarousel />

      {/* 友情链接（参考南京工业大学国家大学科技园） */}
      <FriendLinksSection />
    </div>
  );
}

export default HomePage;
