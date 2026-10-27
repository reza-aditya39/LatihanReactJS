import { Outlet } from "react-router-dom"

function Layout() {
  

  return (
    <>
      <div className="container"> 
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
          <div className="col-md-3 mb-2 mb-md-0"> 
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"> 
              <i className="fa-solid fa-book fa-xl" 
                style={{color: "rgb(116, 192, 252)"}}>
              </i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a> 
          </div> 
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
            <li><a href="/#" className="nav-link px-2">Home</a></li> 
            <li><a href="/#book" className="nav-link px-2">Book</a></li> 
            <li><a href="/Team" className="nav-link px-2">Team</a></li> 
            <li><a href="/contact" className="nav-link px-2">Contact</a></li>  
          </ul> 
          <div className="col-md-3 text-end"> 
            <button type="button" className="btn btn-outline-primary me-2">Login</button> 
            <button type="button" className="btn btn-primary">Sign-up</button> 
          </div> 
        </header> 
      </div>

      <Outlet />
    <div class="container"> 
      <footer class="py-3 my-4"> 
        <ul class="nav justify-content-center border-bottom pb-3 mb-3"> 
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li> 
          <li class="nav-item"><a href="#book" class="nav-link px-2 text-body-secondary">Book</a></li> 
          <li class="nav-item"><a href="/Team" class="nav-link px-2 text-body-secondary">Team</a></li> 
          <li class="nav-item"><a href="/contact" class="nav-link px-2 text-body-secondary">Contact</a></li>
        </ul> 
          <p class="text-center text-body-secondary">&copy; 2026 Zazami</p> 
        </footer> 
      </div> 
    </>
  )
}

export default Layout
