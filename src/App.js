import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Frontend Pages
import HomePage from './pages/HomePage';
import ParkOverviewPage from './pages/ParkOverviewPage';
import NewsPage from './pages/NewsPage';
import PoliciesPage from './pages/PoliciesPage';
import DownloadsPage from './pages/DownloadsPage';
import ContactPage from './pages/ContactPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import NewsManage from './pages/admin/NewsManage';
import AdminRoute from './pages/admin/AdminRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* 后台管理路由 - 不显示 Header/Footer */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/news"
          element={
            <AdminRoute>
              <NewsManage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/policies"
          element={
            <AdminRoute>
              <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">政策管理</h1>
                    <p className="text-gray-600">政策管理功能开发中...</p>
                  </div>
                </div>
              </div>
            </AdminRoute>
          }
        />
        <Route
          path="/admin/downloads"
          element={
            <AdminRoute>
              <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">资料管理</h1>
                    <p className="text-gray-600">资料管理功能开发中...</p>
                  </div>
                </div>
              </div>
            </AdminRoute>
          }
        />
        <Route
          path="/admin/carousel"
          element={
            <AdminRoute>
              <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">轮播图管理</h1>
                    <p className="text-gray-600">轮播图管理功能开发中...</p>
                  </div>
                </div>
              </div>
            </AdminRoute>
          }
        />

        {/* 前台页面路由 - 显示 Header/Footer */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Header />
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/park-overview" element={<ParkOverviewPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/policies" element={<PoliciesPage />} />
                  <Route path="/downloads" element={<DownloadsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
