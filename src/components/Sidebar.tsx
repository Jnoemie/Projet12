import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <img src="/assets/yoga.jpeg" alt="icon1" />
        <img src="/assets/piscine.jpeg" alt="icon2" />
        <img src="/assets/velo.jpeg" alt="icon3" />
        <img src="/assets/muscu.jpeg" alt="icon4" />
      </div>
      <p>Copyright SportSee 2023</p>
    </div>
  );
};

export default Sidebar;