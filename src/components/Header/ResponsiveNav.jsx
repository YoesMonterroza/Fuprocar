import { useState, useEffect } from "react";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

export default function ResponsiveNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h2 className=" text-center fs-4 d-none d-md-block"
        style={{ marginTop: "55px", color: "rgb(80, 143, 235)" }}>
        <Link to="/" className="text-decoration-none text-primary">
          Fundación Progresista de Cartagena</Link>
      </h2>

      <div className="d-flex d-md-none align-items-center justify-content-between px-3 mt-4">
        <button
          className="btn p-0 border-0 fs-3 me-2"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
        <h2 className="text-primary text-center flex-grow-1 m-0"
          style={{  color: "rgb(80, 143, 235)" }}>
          Fundación Progresista de Cartagena
        </h2>
        <div style={{ width: "40px" }} />
      </div>

      <div className=" d-none d-md-flex justify-content-center align-items-center gap-4 mt-3 " >
        <a href="/" className="text-primary text-decoration-none fs-5"
          style={{ color: "rgb(80, 143, 235)" }}>
        <Link to="/" className="text-decoration-none text-primary">
          Inicio</Link>
        </a>
        <MenuItem />

      </div>

      {sidebarOpen && (
        <div
          className="animate__animated animate__fadeInRight position-fixed top-0 start-0 w-100 h-100 bg-white"
          style={{ zIndex: 1055 }}
        >
          <div className="d-flex flex-column h-100 p-4">
            <button
              className="btn-close ms-auto mb-4 "
              onClick={() => setSidebarOpen(false)}
            ></button>
            <a
              href="/"
              className="text-dark text-decoration-none fs-5 mt-3"
              style={{ color: "rgb(80, 143, 235)" }}
              onClick={() => setSidebarOpen(false)}
            >
              <b>Inicio</b>
            </a>
            <MenuItem />

          </div>
        </div>
      )}
    </>
  );
}
