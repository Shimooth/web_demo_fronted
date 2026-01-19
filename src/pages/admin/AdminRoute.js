import React from 'react';
import { Navigate } from 'react-router-dom';

// 后台路由保护组件
function AdminRoute({ children }) {
  const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
}

export default AdminRoute;
