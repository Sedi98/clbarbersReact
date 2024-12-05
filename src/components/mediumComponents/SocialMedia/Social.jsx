import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'; // Using react-icons for social media icons
import './Social.css'; // Import the CSS file

const Social = () => {
  return (
    <div className="social-container">
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/cl_barbersclub001/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button instagram"
      >
        <FaInstagram />
      </a>

      {/* TikTok Button */}
      <a
         href="https://www.tiktok.com/@cl_barbersclub001"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button tiktok"
      >
        <FaTiktok />
      </a>

      <a
         href="https://wa.me/994556550644?text=Salam"
         target="_blank"
         rel="noopener noreferrer"
        className="social-button whatsapp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Social;
