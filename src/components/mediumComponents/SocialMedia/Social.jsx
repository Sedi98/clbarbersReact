import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Using react-icons for social media icons
import './Social.css'; // Import the CSS file

const Social = () => {
  return (
    <div className="social-container">
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button instagram"
      >
        <FaInstagram />
      </a>

      {/* TikTok Button */}
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button tiktok"
      >
        <FaTiktok />
      </a>
    </div>
  );
};

export default Social;
