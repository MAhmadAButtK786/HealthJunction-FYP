// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex-none w-64 h-full text-white bg-gray-800">
      <ul className="p-4">
        <li className="py-2">Dashboard</li>
        <li className="py-2">Users</li>
        <li className="py-2">Settings</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;