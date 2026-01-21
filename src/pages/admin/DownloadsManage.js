import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DownloadsManage() {
  const navigate = useNavigate();
  const [downloadsList, setDownloadsList] = useState([
    { 
      id: 1, 
      title: '项目申报表格模板', 
      category: '表格模板', 
      fileSize: '2.5 MB',
      uploadDate: '2024-01-15',
      downloadCount: 156
    },
    { 
      id: 2, 
      title: '科技项目申报指南', 
      category: '文档资料', 
      fileSize: '1.8 MB',
      uploadDate: '2024-01-10',
      downloadCount: 89
    },
    { 
      id: 3, 
      title: '企业入驻申请表', 
      category: '表格模板', 
      fileSize: '856 KB',
      uploadDate: '2024-01-05',
      downloadCount: 234
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDownload, setEditingDownload] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '表格模板',
    file: null,
    fileName: '',
    description: ''
  });

  const categories = ['表格模板', '文档资料', '政策文件', '其他资料'];

  const handleAdd = () => {
    setEditingDownload(null);
    setFormData({
      title: '',
      category: '表格模板',
      file: null,
      fileName: '',
      description: ''
    });
    setShowAddModal(true);
  };

  const handleEdit = (download) => {
    setEditingDownload(download);
    setFormData({
      title: download.title,
      category: download.category,
      file: null,
      fileName: download.fileName || '',
      description: download.description || ''
    });
    setShowAddModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('确定要删除这个资料吗？')) {
      setDownloadsList(downloadsList.filter(d => d.id !== id));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        file: file,
        fileName: file.name
      });
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingDownload) {
      // 更新
      const updatedDownload = {
        ...editingDownload,
        title: formData.title,
        category: formData.category,
        fileName: formData.fileName,
        description: formData.description
      };
      if (formData.file) {
        updatedDownload.fileSize = formatFileSize(formData.file.size);
      }
      setDownloadsList(downloadsList.map(d => 
        d.id === editingDownload.id ? updatedDownload : d
      ));
    } else {
      // 新增
      const newDownload = {
        id: Date.now(),
        title: formData.title,
        category: formData.category,
        fileName: formData.fileName,
        fileSize: formData.file ? formatFileSize(formData.file.size) : '0 B',
        uploadDate: new Date().toISOString().split('T')[0],
        downloadCount: 0,
        description: formData.description
      };
      setDownloadsList([...downloadsList, newDownload]);
    }
    setShowAddModal(false);
    setEditingDownload(null);
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
            <span className="text-gray-600">资料管理</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">资料管理</h1>
            <button 
              onClick={handleAdd}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              + 上传资料
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
            <input
              type="text"
              placeholder="搜索资料标题..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* 资料列表 */}
          <div className="space-y-4">
            {downloadsList.map((download) => (
              <div
                key={download.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 p-4 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {download.category}
                    </span>
                    <span className="text-gray-500 text-sm">{download.uploadDate}</span>
                    <span className="text-gray-500 text-sm">大小: {download.fileSize}</span>
                    <span className="text-gray-500 text-sm">下载: {download.downloadCount} 次</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">{download.title}</h3>
                  {download.description && (
                    <p className="text-sm text-gray-600">{download.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(download)}
                    className="text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                  >
                    编辑
                  </button>
                  <button 
                    onClick={() => handleDelete(download.id)}
                    className="text-red-600 hover:text-red-700 px-3 py-1 border border-red-600 rounded hover:bg-red-50 transition-colors"
                  >
                    删除
                  </button>
                </div>
              </div>
            ))}
          </div>

          {downloadsList.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>暂无资料数据，点击"上传资料"开始添加</p>
            </div>
          )}
        </div>
      </div>

      {/* 添加/编辑模态框 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingDownload ? '编辑资料' : '上传资料'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    资料标题 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入资料标题"
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
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {editingDownload ? '更换文件（可选）' : '上传文件 *'}
                  </label>
                  <div className="mt-1 flex items-center">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">点击上传</span> 或拖拽文件到此处
                        </p>
                        <p className="text-xs text-gray-500">支持 PDF, DOC, DOCX, XLS, XLSX 等格式</p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange}
                        required={!editingDownload}
                      />
                    </label>
                  </div>
                  {formData.fileName && (
                    <p className="mt-2 text-sm text-gray-600">已选择文件: {formData.fileName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    资料描述
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="请输入资料描述（可选）..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingDownload(null);
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {editingDownload ? '保存修改' : '上传资料'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DownloadsManage;
