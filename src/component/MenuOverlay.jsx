import { NavLink } from "react-router-dom";
import { FaFacebookF,  FaLinkedinIn } from "react-icons/fa";
import "../styles/MenuOverlay.scss";

const active = ({isPending, isActive}) =>{
    return isPending ? "" : isActive ? "active" : ""
}
export default function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose} aria-label="Close menu">
        ✕
      </button>

      <ul className="menu-links">
        <li onClick={onClose} className={active}><NavLink to={"/"}>Home</NavLink></li>
        <li onClick={onClose} className={active}><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
        <li onClick={onClose} className={active}><NavLink to={"/contact"}>Contact</NavLink></li>
      </ul>
      <div className="socialMedia">
        <NavLink to={"https://www.linkedin.com/in/ifeanyi-david-273b9a21a/"} target='_' ><FaLinkedinIn/></NavLink>
        <NavLink to={"https://www.facebook.com/profile.php?id=61579267942845"}><FaFacebookF/></NavLink>
        <i>engineerdavid004@gmail.com</i>
      </div>
    </div>
  );
}
