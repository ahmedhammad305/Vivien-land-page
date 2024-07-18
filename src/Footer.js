import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";



export default function Footer(){
    return(<>
    <div className="footer">
        <div className="container">
            <div className="links">
                <p><Link>سياسات الخصوصية</Link></p> 
                <p><Link to="/user">سياسة الاستبدال و الاسترجاع</Link> </p> 
                <p><Link to="/third">سياسة الشحن</Link></p> 
                <p> <Link to="/fourth">شروط الاستخدام</Link></p>
            </div>
            <h1 style={{textAlign:'center'}}>Vivien</h1>
            <div className="icons">
            <a href="https://www.facebook.com/vivienhydration?mibextid=ZbWKwL"><FaFacebook/></a>
            <a href="https://www.tiktok.com/@vivienbodymilk?_t=8o1jwafxWLw&_r=1"><FaTiktok/></a>
            <a href="https://www.instagram.com/vivien.hydration/?mibextid=NOb6eG"><GrInstagram/></a>
            </div>
        </div>
    </div>
    </>
    )
};