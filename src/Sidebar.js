import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <a key={id} href={url} className="link">
              {icon}
              {text}
            </a>
          );
        })}
      </ul>
      <div className="social-icons">
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <a key={id} href={url} className="social-icon">
              {icon}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar
