import React, { useState } from "react";
import style from "./navbar.module.css";
import Button from "../../basicComponents/Button/Button";
import logo from '../../../assets/img/cl_logo.png'



function Navbar() {
    const [isOpen, setIsOpen] = useState('home');
  return (
    <nav className={style.navbar}>
      <div className={style.brand}>
        <img src={logo} />
      </div>
      <div className={style.links}>
        <a href="#" onClick={() => setIsOpen('home')}       className={ isOpen== 'home'? `${style.link} ${style.active}` : style.link}>Əsas</a>
        <a href="#" onClick={() => setIsOpen('about')}      className={ isOpen== 'about'? `${style.link} ${style.active}` : style.link}>Haqqında</a>
        <a href="#" onClick={() => setIsOpen('services')}   className={ isOpen== 'services'? `${style.link} ${style.active}` : style.link}>Xidmətlər</a>
        <a href="#" onClick={() => setIsOpen('portfolio')}  className={ isOpen== 'portfolio'? `${style.link} ${style.active}`: style.link}>Portfeyl</a>
        <a href="#" onClick={() => setIsOpen('contact')}    className={ isOpen== 'contact'? `${style.link} ${style.active}` : style.link}>Əlaqə</a>
      </div>
      <div>
        <Button />
      </div>
    </nav>
  );
}

export default Navbar;
