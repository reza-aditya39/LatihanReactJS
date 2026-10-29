import { Outlet } from "react-router-dom"
import Header from "../shared/Header"
import Footer from "../shared/Footer"

function Layout() {
  

  return (
    <>
    {/* navbar */}
     <Header/>
      {/* penggunaan outlet agar ketika ganti halaman tidak ditimpa tampilannya */}
      <Outlet />

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default Layout
