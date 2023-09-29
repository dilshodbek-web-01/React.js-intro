import logotip from "../assets/images/logo.png";

const Navbar =()=> {
    return (
        <>
        
        <header>
        <div className="container">
          <nav className="nav">
            <img src={logotip} alt="logo" className="logotip"/>
              <ul>
                <li><a href="#">link-1</a></li>
                <li><a href="#">link-1</a></li>
                <li><a href="#">link-1</a></li>
                <li><a href="#">link-1</a></li>
                <li><a href="#">link-1</a></li>
              </ul>
          </nav>
        </div>
      </header>
        
        </>
    )
}

export default Navbar;