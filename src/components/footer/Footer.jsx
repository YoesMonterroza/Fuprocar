import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div
    style={{backgroundColor: "#fcf5f5"}}>
    <footer className=" py-4 text-center"
    style={{  color: "black",
    fontFamily: "sans-serif", fontSize: "18px", paddingTop: "50px",
     }}>
  <div className="container">
    <p className=" mt-5 text-muted">
      Copyright © 2022 fuprocar - Todos los derechos reservados.
    </p>

    <div className="mb-2">
      <Link to="/politica" className="me-3 text-decoration-none"
        style={{ color: "rgb(80, 143, 235)" }}>
        Política de privacidad
      </Link>
      
      <Link to="/condiciones" className=" text-decoration-none"
        style={{ color: "rgb(80, 143, 235)" }}>
        Términos y condiciones
      </Link>
    </div>

    <hr className="mx-auto" style={{ width: "60px", opacity: 0.2 }} />

    <p className="mb-4 mt-5 text-muted">Fundación Progresista de Cartagena</p>
  </div>
</footer>
</div>
  )
}
