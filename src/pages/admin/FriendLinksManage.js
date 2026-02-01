import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadFriendLinks, saveFriendLinks, getDefaultFriendLinks } from '../../utils/friendLinksStorage';

function FriendLinksManage() {
  const navigate = useNavigate();
  const [data, setData] = useState(getDefaultFriendLinks());
  const [modalType, setModalType] = useState(null); // 'category' | 'link'
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editingLinkId, setEditingLinkId] = useState(null);
  const [categoryForm, setCategoryForm] = useState({ name: '', order: 1 });
  const [linkForm, setLinkForm] = useState({ name: '', url: '' });

  useEffect(() => {
    setData(loadFriendLinks());
  }, []);

  const save = (newData) => {
    setData(newData);
    saveFriendLinks(newData);
  };

  const nextCategoryId = () => Math.max(0, ...data.categories.map((c) => c.id)) + 1;
  const nextLinkId = (links) => Math.max(0, ...(links || []).map((l) => l.id)) + 1;

  const handleAddCategory = () => {
    setEditingCategoryId(null);
    setCategoryForm({ name: '', order: data.categories.length + 1 });
    setModalType('category');
  };

  const handleEditCategory = (cat) => {
    setEditingCategoryId(cat.id);
    setCategoryForm({ name: cat.name, order: cat.order ?? cat.id });
    setModalType('category');
  };

  const handleSaveCategory = (e) => {
    e.preventDefault();
    if (editingCategoryId !== null) {
      const next = {
        ...data,
        categories: data.categories.map((c) =>
          c.id === editingCategoryId
            ? { ...c, name: categoryForm.name, order: categoryForm.order }
            : c
        ),
      };
      save(next);
    } else {
      const newCat = {
        id: nextCategoryId(),
        name: categoryForm.name,
        order: categoryForm.order,
        links: [],
      };
      save({ ...data, categories: [...data.categories, newCat] });
    }
    setModalType(null);
  };

  const handleDeleteCategory = (id) => {
    if (!window.confirm('确定删除该分类及其下所有链接？')) return;
    save({
      ...data,
      categories: data.categories.filter((c) => c.id !== id),
    });
  };

  const handleAddLink = (categoryId) => {
    const cat = data.categories.find((c) => c.id === categoryId);
    setEditingCategoryId(categoryId);
    setEditingLinkId(null);
    setLinkForm({ name: '', url: '' });
    setModalType('link');
  };

  const handleEditLink = (categoryId, link) => {
    setEditingCategoryId(categoryId);
    setEditingLinkId(link.id);
    setLinkForm({ name: link.name, url: link.url || '' });
    setModalType('link');
  };

  const handleSaveLink = (e) => {
    e.preventDefault();
    const cat = data.categories.find((c) => c.id === editingCategoryId);
    if (!cat) return;
    const links = cat.links || [];
    if (editingLinkId !== null) {
      const nextLinks = links.map((l) =>
        l.id === editingLinkId ? { ...l, name: linkForm.name, url: linkForm.url } : l
      );
      save({
        ...data,
        categories: data.categories.map((c) =>
          c.id === editingCategoryId ? { ...c, links: nextLinks } : c
        ),
      });
    } else {
      const newLink = { id: nextLinkId(links), name: linkForm.name, url: linkForm.url };
      save({
        ...data,
        categories: data.categories.map((c) =>
          c.id === editingCategoryId ? { ...c, links: [...(c.links || []), newLink] } : c
        ),
      });
    }
    setModalType(null);
  };

  const handleDeleteLink = (categoryId, linkId) => {
    if (!window.confirm('确定删除该链接？')) return;
    save({
      ...data,
      categories: data.categories.map((c) =>
        c.id === categoryId ? { ...c, links: (c.links || []).filter((l) => l.id !== linkId) } : c
      ),
    });
  };

  const sortedCategories = [...data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/admin/dashboard')} className="text-gray-600 hover:text-gray-800">
              ← 返回首页
            </button>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">友情链接管理</span>
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">友情链接</h1>
            <button
              onClick={handleAddCategory}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              + 添加分类
            </button>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            前台首页底部将按分类展示友情链接，修改后自动保存到本地。
          </p>

          <div className="space-y-6">
            {sortedCategories.map((cat) => (
              <div key={cat.id} className="border border-gray-200 p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditCategory(cat)}
                      className="text-blue-600 hover:text-blue-700 text-sm px-2 py-1"
                    >
                      编辑分类
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(cat.id)}
                      className="text-red-600 hover:text-red-700 text-sm px-2 py-1"
                    >
                      删除分类
                    </button>
                    <button
                      onClick={() => handleAddLink(cat.id)}
                      className="text-green-600 hover:text-green-700 text-sm px-2 py-1"
                    >
                      + 添加链接
                    </button>
                  </div>
                </div>
                <ul className="space-y-2">
                  {(cat.links || []).map((link) => (
                    <li key={link.id} className="flex justify-between items-center text-sm py-1 border-b border-gray-100">
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 truncate max-w-md">
                        {link.name}
                      </a>
                      <div className="flex gap-2 flex-shrink-0">
                        <button onClick={() => handleEditLink(cat.id, link)} className="text-blue-600 hover:underline">
                          编辑
                        </button>
                        <button onClick={() => handleDeleteLink(cat.id, link.id)} className="text-red-600 hover:underline">
                          删除
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                {(!cat.links || cat.links.length === 0) && (
                  <p className="text-gray-400 text-sm py-2">暂无链接，点击「添加链接」</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 分类 弹窗 */}
      {modalType === 'category' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {editingCategoryId !== null ? '编辑分类' : '添加分类'}
            </h2>
            <form onSubmit={handleSaveCategory}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">分类名称 *</label>
                  <input
                    type="text"
                    required
                    value={categoryForm.name}
                    onChange={(e) => setCategoryForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500"
                    placeholder="如：政府部门"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">排序（数字越小越靠前）</label>
                  <input
                    type="number"
                    min={1}
                    value={categoryForm.order}
                    onChange={(e) => setCategoryForm((f) => ({ ...f, order: Number(e.target.value) || 1 }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  取消
                </button>
                <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 链接 弹窗 */}
      {modalType === 'link' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {editingLinkId !== null ? '编辑链接' : '添加链接'}
            </h2>
            <form onSubmit={handleSaveLink}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">链接名称 *</label>
                  <input
                    type="text"
                    required
                    value={linkForm.name}
                    onChange={(e) => setLinkForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500"
                    placeholder="如：中华人民共和国中央人民政府"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">链接地址 *</label>
                  <input
                    type="url"
                    required
                    value={linkForm.url}
                    onChange={(e) => setLinkForm((f) => ({ ...f, url: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500"
                    placeholder="https://..."
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  取消
                </button>
                <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendLinksManage;
