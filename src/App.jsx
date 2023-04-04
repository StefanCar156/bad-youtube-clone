import React, { useState } from "react"
import "./App.scss"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import Subscriptions from "./pages//Subscriptions/Subscriptions"
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Video from "./pages/Video/Video"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const mainMargin = useLocation().pathname.includes("watch") ? 0 : 255

  return (
    <div className="App">
      <Header
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      {isSidebarOpen && <Sidebar />}
      <main style={{ marginLeft: isSidebarOpen ? `${mainMargin}px` : "0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/watch/:videoID" element={<Video />} />
        </Routes>
      </main>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
