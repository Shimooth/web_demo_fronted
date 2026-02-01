import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InnovationManage() {
  const navigate = useNavigate();
  const [innovationList, setInnovationList] = useState([
    { id: 1, title: '园区举办创新创业大赛路演活动', category: '创业大赛', publishDate: '2024-01-15', status: '已发布', image: 'https://via.placeholder.com/300x200/0ea5e9/ffffff?text=创业大赛' },
    { id: 2, title: '孵化器入驻项目签约仪式成功举行', category: '孵化动态', publishDate: '2024-01-10', status: '已发布', image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=孵化动态' },
    { id: 3, title: '创业导师沙龙：商业模式与融资策略', category: '创业沙龙', publishDate: '2024-01-08', status: '草稿', image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=创业沙龙' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '创业大赛',
    content: '',
    image: '',
    publishDate: new Date().toISOString().split('T')[0],
    status: '草稿'
  });

  const categories = ['创业大赛', '孵化动态', '创业沙龙', '众创空间', '成果转化'];

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: '创业大赛',
      content: '',
      image: '',
      publishDate: new Date().toISOString().split('T')[0],
      status: '草稿'
    });
    setShowAddModal(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      content: item.content || '',
      image: item.image,
      publishDate: item.publishDate,
      status: item.status
    });
    setShowAddModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('确定要删除这条创新创业内容吗？')) {
      setInnovationList(innovationList.filter(item => item.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setInnovationList(innovationList.map(item =>
        item.id === editingItem.id ? { ...item, ...formData } : item
      ));
    } else {
      const newItem = { id: Date.now(), ...formData };
      setInnovationList([...innovationList, newItem]);
    }
    setShowAddModal(false);
    setEditingItem(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md mb-6 p-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/admin/dashboard')} className="text-gray-600 hover:text-gray-800">
              ← 返回首页
            </button>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">创新创业管理</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">创新创业管理</h1>
            <button onClick={handleAdd} className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              + 添加内容
            </button>
          </div>

          <div className="mb-6 flex gap-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">全部分类</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">全部状态</option>
              <option value="已发布">已发布</option>
              <option value="草稿">草稿</option>
            </select>
            <input type="text" placeholder="搜索标题..." className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>

          <div className="space-y-4">
            {innovationList.map((item) => (
              <div key={item.id} className="flex items-center gap-6 border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <div className="flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-32 h-24 object-cover rounded-lg border border-gray-200"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/128x96/cccccc/666666?text=图片加载失败'; }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">{item.category}</span>
                    <span className={`text-xs px-2 py-1 rounded ${item.status === '已发布' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{item.status}</span>
                    <span className="text-gray-500 text-sm">{item.publishDate}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-600 rounded hover:bg-blue-50 transition-colors">编辑</button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-700 px-3 py-1 border border-red-600 rounded hover:bg-red-50 transition-colors">删除</button>
                </div>
              </div>
            ))}
          </div>

          {innovationList.length === 0 && (
            <div className="text-center py-12 text-gray-500">暂无创新创业内容，点击"添加内容"开始添加</div>
          )}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{editingItem ? '编辑创新创业内容' : '添加创新创业内容'}</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">标题 *</label>
                  <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="请输入标题" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">分类 *</label>
                    <select required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">发布日期 *</label>
                    <input type="date" required value={formData.publishDate} onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">状态 *</label>
                  <select required value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="草稿">草稿</option>
                    <option value="已发布">已发布</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">图片 *</label>
                  <div className="space-y-2">
                    <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="请输入图片URL或上传图片" />
                    <div className="flex items-center gap-4">
                      <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-sm text-gray-700">选择文件</span>
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                      </label>
                      {formData.image && <img src={formData.image} alt="预览" className="h-24 w-auto rounded border border-gray-200" onError={(e) => { e.target.style.display = 'none'; }} />}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">内容</label>
                  <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={8}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="请输入详细内容..." />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-gray-200">
                <button type="button" onClick={() => { setShowAddModal(false); setEditingItem(null); }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">取消</button>
                <button type="submit" className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">{editingItem ? '保存修改' : '添加内容'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InnovationManage;
