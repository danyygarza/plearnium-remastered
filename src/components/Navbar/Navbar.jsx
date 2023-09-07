import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../contexts/AuthContext";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await logout();
      navigate('/');
    } catch(err){
      console.log(err);
    }
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.ternium} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["inicio", "juego", "sobre ternium", "proceso", "creadoras"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["inicio", "juego", "sobre ternium", "proceso", "creadoras"].map((item) => (
                <li className="app__flex p-text" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <button onClick={handleLogout} className="app__login-button p-text">logout</button>
            </ul>
          </motion.div>
        )}
      </div>
      <button onClick={handleLogout} className="app__login-butto-afuera p-text">logout</button>
    </nav>
    
  );
};

export default Navbar;
