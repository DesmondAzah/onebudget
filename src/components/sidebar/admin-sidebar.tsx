import React from "react";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Admin</h3>
      </div>
      <div className="sidebar-body">
        <ul>
          <li>
            <a href="/admin/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/admin/users">Users</a>
          </li>
          <li>
            <a href="/admin/posts">Posts</a>
          </li>
          <li>
            <a href="/admin/comments">Comments</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
