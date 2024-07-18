import { Link } from "react-router-dom";
import imag from './image/store.webp'
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
function Navigation (){
    return(
        <>
        <div className="container">
         <nav className="navbar leader">
  <div class="container-fluid parent">
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link  to ="/" className="navbar-brand " ><img style={{width:"28px", cursor:'pointer'}} src={imag} alt=""/> </Link>
        <span className="link">منتجات نسائية
 </span>
        <Link to="/user" style={{textDecoration:"none", color:"black", cursor:'pointer'}}
        className="link">سياسة الاستبدال و الاسترجاع</Link>
        <Link to="/third" style={{ cursor:'pointer' , textDecoration:'none', color:'black'}} className="link">سياسة الشحن</Link   >
        <div className="position"><a href="https://www.facebook.com/vivienhydration?mibextid=ZbWKwL" > <FaFacebook/> </a>
        <a href="https://www.tiktok.com/@vivienbodymilk?_t=8o1jwafxWLw&_r=1" className=""><FaTiktok/></a> <a href="https://www.instagram.com/vivien.hydration/?mibextid=NOb6eG"><GrInstagram/></a></div>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li style={{ cursor:'pointer'}} className="nav-item">
            <Link   to="/user" className="nav-link active" aria-current="page" >سياسة الاستبدال و الاسترجاع</Link>
          </li>
          <li style={{ cursor:'pointer'}} className="nav-item">
            <Link to="/third" className="nav-link" >سياسة الشحن</Link>
          </li>
          <li style={{ cursor:'pointer'}} className="nav-item dropdown">
            <ul style={{ cursor:'pointer'}} className="dropdown-menu">
              <li><Link  to="/" className="dropdown-item" >منتجات بنات</Link></li>
              
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </div>
</nav>
</div>
  </>
    )
}

   
export default Navigation;