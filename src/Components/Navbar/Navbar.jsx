import React, { useEffect,useState } from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky,setsticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setsticky(true):setsticky(false);
    })
  },[]);
  const [mobileMenu,setMobileMenu] =useState(false);

  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
   <nav className={`container ${sticky? 'dark-nav' : ''}`}> 
<img src={logo} alt="" className='logo'/>
<ul className={mobileMenu?' ': 'hide-mobile-menu'}>
    <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
    <li> <Link  to='progammer' smooth={true} offset={-260} duration={500}>Program</Link></li>
    <li> <Link  to='about-sk' smooth={true} offset={-150} duration={500}>About us</Link></li>
    <li> <Link to='campus-sk' smooth={true} offset={-260} duration={500}>Campus</Link></li>
    <li><Link to='testo' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
    <li> <Link to='contact-kh' smooth={true} offset={-260} duration={500}className='btn'>Contact us</Link></li>
</ul>
<img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar;
