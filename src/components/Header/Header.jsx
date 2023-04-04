import React from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineSearch } from "react-icons/ai"
import "./header.scss"

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div>
          <button
            className="menu-toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <RxHamburgerMenu />
          </button>
          <h3 className="logo">TuTu</h3>
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="search-btn">
            <AiOutlineSearch />
          </button>
        </div>
        <div className="profile-btn">
          <ul className="profile-list">
            <li className="profile-item">Sign Out</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
