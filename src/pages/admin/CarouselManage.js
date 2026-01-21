import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CarouselManage() {
  const navigate = useNavigate();
  const [carouselList, setCarouselList] = useState([
    { 
      id: 1, 
      title: '园区新闻1', 
      image: 'https://via.placeholder.com/1200x400/0ea5e9/ffffff?text=园区新闻1',
      link: '/news',
      order: 1,
      status: '启用'
    },
    { 
      id: 2, 
      title: '政策法规', 
      image: 'https://via.placeholder.com/1200x400/6366f1/ffffff?text=政策法规',
      link: '/policies',
      order: 2,
      status: '启用'
    },
    { 
      id: 3, 
      title: '科技服务', 
      image: 'https://via.placeholder.com/1200x400/10b981/ffffff?text=科技服务',
      link: '/contact',
      order: 3,
      status: '禁用'
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCarousel, setEditingCarousel] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    link: '',
    description: '',
    order: 1,
    status: '启用'
  });

  const handleAdd = () => {
    setEditingCarousel(null);
    setFormData({
      title: '',
      image: '',
      link: '',
      description: '',
      order: carouselList.length + 1,
      status: '启用'
    });
    setShowAddModal(true);
  };

  const handleEdit = (carousel) => {
    setEditingCarousel(carousel);
    setFormData({
      title: carousel.title,
      image: carousel.image,
      link: carousel.link,
      description: carousel.description || '',
      order: carousel.order,
      status: carousel.status
    });
    setShowAddModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('确定要删除这个轮播图吗？')) {
      setCarouselList(carouselList.filter(c => c.id !== id));
    }
  };

  const handleMove = (id, direction) => {
    const index = carouselList.findIndex(c => c.id === id);
    if (index === -1) return;

    const newList = [...carouselList];
    if (direction === 'up' && index > 0) {
      [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];
      newList[index].order = index + 1;
      newList[index - 1].order = index;
    } else if (direction === 'down' && index < newList.length - 1) {
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
      newList[index].order = index + 1;
      newList[index + 1].order = index + 2;
    }
    setCarouselList(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCarousel) {
      // 更新
      setCarouselList(carouselList.map(c => 
        c.id === editingCarousel.id ? { ...c, ...formData } : c
      ));
    } else {
      // 新增
      const newCarousel = {
        id: Date.now(),
        ...formData,
        order: carouselList.length + 1
      };
      setCarouselList([...carouselList, newCarousel]);
    }
    setShowAddModal(false);
    setEditingCarousel(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // 按顺序排序
  const sortedCarouselList = [...carouselList].sort((a, b) => a.order - b.order);

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
            <span className="text-gray-600">轮播图管理</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">轮播图管理</h1>
            <button 
              onClick={handleAdd}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              + 添加轮播图
            </button>
          </div>

          {/* 轮播图列表 */}
          <div className="space-y-4">
            {sortedCarouselList.map((carousel, index) => (
              <div
                key={carousel.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex gap-6">
                  {/* 图片预览 */}
                  <div className="flex-shrink-0">
                    <img
                      src={carousel.image}
                      alt={carousel.title}
                      className="w-48 h-32 object-cover rounded-lg border border-gray-200"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/192x128/cccccc/666666?text=图片加载失败';
                      }}
                    />
                  </div>

                  {/* 信息 */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            顺序: {carousel.order}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            carousel.status === '启用' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {carousel.status}
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">{carousel.title}</h3>
                        {carousel.description && (
                          <p className="text-sm text-gray-600 mb-2">{carousel.description}</p>
                        )}
                        <p className="text-sm text-gray-500">链接: {carousel.link || '无'}</p>
                      </div>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleMove(carousel.id, 'up')}
                        disabled={index === 0}
                        className={`px-3 py-1 border rounded transition-colors ${
                          index === 0
                            ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                            : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}
                        title="上移"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => handleMove(carousel.id, 'down')}
                        disabled={index === sortedCarouselList.length - 1}
                        className={`px-3 py-1 border rounded transition-colors ${
                          index === sortedCarouselList.length - 1
                            ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                            : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}
                        title="下移"
                      >
                        ↓
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(carousel)}
                        className="text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                      >
                        编辑
                      </button>
                      <button 
                        onClick={() => handleDelete(carousel.id)}
                        className="text-red-600 hover:text-red-700 px-3 py-1 border border-red-600 rounded hover:bg-red-50 transition-colors"
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {carouselList.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>暂无轮播图数据，点击"添加轮播图"开始添加</p>
            </div>
          )}
        </div>
      </div>

      {/* 添加/编辑模态框 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingCarousel ? '编辑轮播图' : '添加轮播图'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
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
                    placeholder="请输入轮播图标题"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    图片 *
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="请输入图片URL或上传图片"
                    />
                    <div className="flex items-center gap-4">
                      <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-sm text-gray-700">选择文件</span>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                      {formData.image && (
                        <img
                          src={formData.image}
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      链接地址
                    </label>
                    <input
                      type="text"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="/news 或 https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      显示顺序
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    状态 *
                  </label>
                  <select
                    required
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="启用">启用</option>
                    <option value="禁用">禁用</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    描述
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入轮播图描述（可选）..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingCarousel(null);
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {editingCarousel ? '保存修改' : '添加轮播图'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselManage;
