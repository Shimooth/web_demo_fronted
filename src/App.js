import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Frontend Pages
import HomePage from './pages/HomePage';
import ParkOverviewPage from './pages/ParkOverviewPage';
import NewsPage from './pages/NewsPage';
import PartyBuildingPage from './pages/PartyBuildingPage';
import PoliciesPage from './pages/PoliciesPage';
import DownloadsPage from './pages/DownloadsPage';
import ContactPage from './pages/ContactPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import NewsManage from './pages/admin/NewsManage';
import PoliciesManage from './pages/admin/PoliciesManage';
import PartyBuildingManage from './pages/admin/PartyBuildingManage';
import DownloadsManage from './pages/admin/DownloadsManage';
import CarouselManage from './pages/admin/CarouselManage';
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
              <PoliciesManage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/party-building"
          element={
            <AdminRoute>
              <PartyBuildingManage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/downloads"
          element={
            <AdminRoute>
              <DownloadsManage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/carousel"
          element={
            <AdminRoute>
              <CarouselManage />
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
                  <Route path="/party-building" element={<PartyBuildingPage />} />
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
