import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PoliciesManage() {
  const navigate = useNavigate();
  const [policiesList, setPoliciesList] = useState([
    { 
      id: 1, 
      title: '科技创新支持政策', 
      category: '政策文件', 
      publishDate: '2024-01-15',
      status: '已发布'
    },
    { 
      id: 2, 
      title: '关于申报2024年度科技项目的通知', 
      category: '通知公告', 
      publishDate: '2024-01-10',
      status: '已发布'
    },
    { 
      id: 3, 
      title: '企业孵化器管理办法', 
      category: '管理办法', 
      publishDate: '2024-01-05',
      status: '草稿'
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '政策文件',
    content: '',
    publishDate: new Date().toISOString().split('T')[0],
    status: '草稿'
  });

  const categories = ['政策文件', '通知公告', '管理办法', '实施细则'];

  const handleAdd = () => {
    setEditingPolicy(null);
    setFormData({
      title: '',
      category: '政策文件',
      content: '',
      publishDate: new Date().toISOString().split('T')[0],
      status: '草稿'
    });
    setShowAddModal(true);
  };

  const handleEdit = (policy) => {
    setEditingPolicy(policy);
    setFormData({
      title: policy.title,
      category: policy.category,
      content: policy.content || '',
      publishDate: policy.publishDate,
      status: policy.status
    });
    setShowAddModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('确定要删除这条政策吗？')) {
      setPoliciesList(policiesList.filter(p => p.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPolicy) {
      // 更新
      setPoliciesList(policiesList.map(p => 
        p.id === editingPolicy.id ? { ...p, ...formData } : p
      ));
    } else {
      // 新增
      const newPolicy = {
        id: Date.now(),
        ...formData
      };
      setPoliciesList([...policiesList, newPolicy]);
    }
    setShowAddModal(false);
    setEditingPolicy(null);
  };

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
            <span className="text-gray-600">政策管理</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">政策管理</h1>
            <button 
              onClick={handleAdd}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              + 添加政策
            </button>
          </div>

          {/* 筛选栏 */}
          <div className="mb-6 flex gap-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">全部分类</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">全部状态</option>
              <option value="已发布">已发布</option>
              <option value="草稿">草稿</option>
            </select>
            <input
              type="text"
              placeholder="搜索政策标题..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* 政策列表 */}
          <div className="space-y-4">
            {policiesList.map((policy) => (
              <div
                key={policy.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 p-4 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">
                      {policy.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      policy.status === '已发布' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {policy.status}
                    </span>
                    <span className="text-gray-500 text-sm">{policy.publishDate}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">{policy.title}</h3>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(policy)}
                    className="text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                  >
                    编辑
                  </button>
                  <button 
                    onClick={() => handleDelete(policy.id)}
                    className="text-red-600 hover:text-red-700 px-3 py-1 border border-red-600 rounded hover:bg-red-50 transition-colors"
                  >
                    删除
                  </button>
                </div>
              </div>
            ))}
          </div>

          {policiesList.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>暂无政策数据，点击"添加政策"开始添加</p>
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
                {editingPolicy ? '编辑政策' : '添加政策'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    政策标题 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入政策标题"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      发布日期 *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.publishDate}
                      onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
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
                    <option value="草稿">草稿</option>
                    <option value="已发布">已发布</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    政策内容
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={8}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入政策详细内容..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingPolicy(null);
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {editingPolicy ? '保存修改' : '添加政策'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PoliciesManage;
