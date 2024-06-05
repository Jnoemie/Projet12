import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><img src="/path/to/icon1.png" alt="icon1" /></li>
        <li><img src="/path/to/icon2.png" alt="icon2" /></li>
        <li><img src="/path/to/icon3.png" alt="icon3" /></li>
        <li><img src="/path/to/icon4.png" alt="icon4" /></li>
      </ul>
      <footer>Copyright SportSee 2023</footer>
    </div>
  );
};

export default Sidebar;
