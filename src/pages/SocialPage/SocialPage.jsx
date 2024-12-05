import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLink,
  FaWhatsapp,
} from "react-icons/fa";
import "./style.css"; // Custom styles
import logo from "../../assets/img/cl_logo.png";
import { useNavigate } from "react-router-dom"

function SocialPage() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="card">
        <div className="card-header">
          <img
            src={logo}
            alt="Card Image"
            className="card-image"
            width={100}
            height={100}
          />
          <h2 className="card-title">Cl Barbers Club 001</h2>
        </div>
        <div className="card-body">
          <div className="card-info">
            <p className="info">
              <FaMapMarkerAlt className="icon" /> Ünvan Abbas Mirza Şərifzadə
              küçəsi 2N-li Baza Tibb Kollecinin yanı
            </p>
            <p className="info">
              <FaPhoneAlt className="icon" /> +994 55 655 06 44
            </p>
            <p className="info" onClick={() => navigate("/")}>
              <FaLink className="icon" /> www.clbarbers.vercel.app
            </p>
          </div>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/cl_barbersclub001/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@cl_barbersclub001"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon tiktok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://wa.me/994556550644?text=Salam"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialPage;
