import React, { useState, useEffect } from 'react';
import { loadFriendLinks } from '../utils/friendLinksStorage';

/**
 * 友情链接 - 四个栏目放一行，点击栏目在其下方展开该栏链接（宽度与栏目一致）。
 */
function FriendLinksSection() {
  const [data, setData] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  useEffect(() => {
    setData(loadFriendLinks());
  }, []);

  if (!data || !data.categories || data.categories.length === 0) return null;

  const sortedCategories = [...data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600">
          友情链接
        </h2>

        {/* 有展开时：透明遮罩，点击空白收起 */}
        {activeCategoryId != null && (
          <button
            type="button"
            aria-label="收起"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setActiveCategoryId(null)}
          />
        )}

        {/* 四个栏目一行，等宽；展开内容用绝对定位浮层，不挤占布局；有展开时提高层级在遮罩之上 */}
        <div
          className={`relative grid grid-cols-4 gap-0 border border-gray-200 rounded overflow-visible ${activeCategoryId != null ? 'z-50' : ''}`}
        >
          {sortedCategories.map((cat) => {
            const isOpen = activeCategoryId === cat.id;
            const links = cat.links || [];
            return (
              <div key={cat.id} className="relative min-w-0 border-r border-gray-200 last:border-r-0">
                {/* 栏目标题：点击展开/收起 */}
                <button
                  type="button"
                  onClick={() => setActiveCategoryId((prev) => (prev === cat.id ? null : cat.id))}
                  className={`w-full px-3 py-3 text-left text-sm font-bold transition-colors ${
                    isOpen
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                  aria-expanded={isOpen}
                >
                  === {cat.name} ===
                </button>
                {/* 浮层：绝对定位在该栏正下方，不撑开页面、不影响其他列和下方板块 */}
                {isOpen && (
                  <div
                    className="absolute left-0 right-0 top-full z-50 mt-1 min-w-0 rounded border border-gray-200 bg-white py-2 shadow-lg overflow-auto max-h-64"
                    style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }}
                  >
                    <ul className="py-1 px-3 flex flex-col gap-y-1.5 text-sm text-gray-600 list-none">
                      {links.map((link) => (
                        <li key={link.id} className="truncate">
                          <a
                            href={link.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary-600 hover:underline block truncate"
                            title={link.name}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FriendLinksSection;
