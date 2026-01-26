import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewsManage() {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([
    { 
      id: 1, 
      title: '宿迁大学科技园举办科技创新政策解读会', 
      date: '2024-01-15', 
      category: '新闻动态',
      coverImage: '/images/org/image1.jpg',
      isCarouselNews: true
    },
    { 
      id: 2, 
      title: '2024年度科技项目申报工作正式启动', 
      date: '2024-01-10', 
      category: '通知公告',
      coverImage: '',
      isCarouselNews: false
    },
    { 
      id: 3, 
      title: '园区企业与高校签署产学研合作协议', 
      date: '2024-01-08', 
      category: '新闻动态',
      coverImage: '/images/org/image2.jpg',
      isCarouselNews: true
    },
    { 
      id: 4, 
      title: '科技创新成果转化项目路演活动成功举办', 
      date: '2024-01-05', 
      category: '新闻动态',
      coverImage: '/images/org/image3.jpg',
      isCarouselNews: true
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    category: '新闻动态',
    coverImage: '',
    isCarouselNews: false,
    content: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 导航栏 */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="text-gray-600 hover:text-gray-800"
            >
              ← 返回首页
            </button>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">新闻管理</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">新闻管理</h1>
            <button 
              onClick={() => {
                setEditingNews(null);
                setFormData({
                  title: '',
                  date: new Date().toISOString().split('T')[0],
                  category: '新闻动态',
                  coverImage: '',
                  isCarouselNews: false,
                  content: ''
                });
                setShowAddModal(true);
              }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              + 添加新闻
            </button>
          </div>

          {/* 新闻列表 */}
          <div className="space-y-4">
            {newsList.map((news) => (
              <div
                key={news.id}
                className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0"
              >
                {news.coverImage && (
                  <div className="flex-shrink-0">
                    <img
                      src={news.coverImage}
                      alt={news.title}
                      className="w-32 h-20 object-cover rounded-lg border border-gray-200"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/128x80/cccccc/666666?text=图片加载失败';
                      }}
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      {news.category}
                    </span>
                    {news.isCarouselNews && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        轮播图新闻
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">{news.title}</h3>
                  {news.coverImage && (
                    <p className="text-xs text-gray-500">封面图片: {news.coverImage}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setEditingNews(news);
                      setFormData({
                        title: news.title,
                        date: news.date,
                        category: news.category,
                        coverImage: news.coverImage || '',
                        isCarouselNews: news.isCarouselNews || false,
                        content: news.content || ''
                      });
                      setShowAddModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                  >
                    编辑
                  </button>
                  <button 
                    onClick={() => {
                      if (window.confirm('确定要删除这条新闻吗？')) {
                        setNewsList(newsList.filter(n => n.id !== news.id));
                      }
                    }}
                    className="text-red-600 hover:text-red-700 px-3 py-1 border border-red-600 rounded hover:bg-red-50 transition-colors"
                  >
                    删除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 添加/编辑模态框 */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  {editingNews ? '编辑新闻' : '添加新闻'}
                </h2>
              </div>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editingNews) {
                    setNewsList(newsList.map(n => 
                      n.id === editingNews.id ? { ...n, ...formData } : n
                    ));
                  } else {
                    const newNews = {
                      id: Date.now(),
                      ...formData
                    };
                    setNewsList([...newsList, newNews]);
                  }
                  setShowAddModal(false);
                  setEditingNews(null);
                }} 
                className="p-6"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      标题 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="请输入新闻标题"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        日期 *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        分类 *
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="新闻动态">新闻动态</option>
                        <option value="通知公告">通知公告</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={formData.isCarouselNews}
                        onChange={(e) => setFormData({ ...formData, isCarouselNews: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium text-gray-700">设为轮播图新闻（需要封面图片）</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      封面图片 {formData.isCarouselNews && <span className="text-red-500">*</span>}
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        required={formData.isCarouselNews}
                        value={formData.coverImage}
                        onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="/images/org/image1.jpg 或上传图片"
                      />
                      <div className="flex items-center gap-4">
                        <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <span className="text-sm text-gray-700">选择文件</span>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setFormData({ ...formData, coverImage: reader.result });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>
                        {formData.coverImage && (
                          <img
                            src={formData.coverImage}
                            alt="预览"
                            className="h-24 w-auto rounded border border-gray-200"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      内容
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={6}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="请输入新闻内容（可选）..."
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingNews(null);
                    }}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {editingNews ? '保存修改' : '添加新闻'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsManage;
