import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MenuItem = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    
    <div className=" dropdown"
    style={{fontFamily: "sans-serif"}} ref={dropdownRef}>
     <button
  className="d-flex align-items-center justify-content-between"
  onClick={toggleDropdown}
  style={{
    backgroundColor: "white",
    border: "none",
    padding: "0", 
    fontSize: "1.25rem", 
    lineHeight: "1.5",    
    outline: "none",
  }}
  
>
  <span style={{ display: "flex", alignItems: "center" }}>
    Menú
    <span
      style={{
        display: "flex",
        transition: "transform 0.3s ease",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="16"
        height="16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>
  </span>
</button>

      <div
        className={` dropdown-menu ${isOpen ? "d-block" : "d-none"}`}
        style={{
          border: "none",
          boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <button
          className="dropdown-item"
          type="button"
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Link to="/nosotros" style={{ textDecoration: "none", color: "black" }}>
          Nosotros</Link>
        </button>
        <button
          className="dropdown-item"
          type="button"
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Link to="/valores" style={{ textDecoration: "none", color: "black" }}>
          Nuestros Valores</Link>
        </button>
        <button
          className="dropdown-item"
          type="button"
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Link to="/portafolio" className="hover-blue" style={{ textDecoration: "none", color: "black" }}>
          Portafolio
          </Link>
        </button>
        <button
          className="dropdown-item"
          type="button"
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Link to="/contacto" style={{ textDecoration: "none", color: "black" }}>
          Contactanos
          </Link>
        </button>
      </div>
      <style>{`
        .hover-blue:hover {
          color: rgb(80, 143, 235);
        }
      `}</style>
    </div>
  );
}

