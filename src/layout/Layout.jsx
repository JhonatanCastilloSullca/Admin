import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { useState } from "react"
import Footer from "./Footer"

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (

    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-4 overflow-auto bg-PrimaryShadowWhite">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout