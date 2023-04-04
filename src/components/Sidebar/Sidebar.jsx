import React from "react"
import { NavLink } from "react-router-dom"
import "./sidebar.scss"
import { AiOutlineHome, AiFillHome } from "react-icons/ai"
import { MdOutlineSubscriptions, MdSubscriptions } from "react-icons/md"

const Sidebar = () => {
  const activeStyle = {
    backgroundColor: "rgb(90, 90, 90)",
  }

  return (
    <aside className="sidebar">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="sidebar-link"
        to="/"
      >
        <AiFillHome /> <span>Home</span>
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="sidebar-link"
        to="/subscriptions"
      >
        <MdSubscriptions /> <span>Subscriptions</span>
      </NavLink>
    </aside>
  )
}

export default Sidebar
