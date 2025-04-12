import { SpeedDialog } from "../components/dialog/SpeedDialog"
import { Footer } from "../components/footer/Footer"
import ResponsiveNav from "../components/Header/ResponsiveNav"

export const PortafolioPage = () => {
  return (
    <>
      <ResponsiveNav/>
      <SpeedDialog />    
      <h2 className="text-center mb-5  position-relative"
      style={{ fontfamily: "Playfair Display", color: "#645b5b", marginTop: "150px" }}>
      <span
        className="d-inline-block px-4 bg-white position-relative z-1"
        style={{ color: "rgb(80, 143, 235)",
            fontSize: "46px",
          }}
      >
        Ofertas de servicios
      </span>
      <hr className="title-line position-absolute top-50 start-0 w-100 translate-middle-y m-0" />
    </h2>
    <ul
          className="fs-4 text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "720px" }}
        >
          <h2 className="text text-black mb-4">Área Financiera</h2>
          <li>
          Gestión Integral de Contabilidad Para Entidades Públicas y  Privadas.
          </li>
          <li>
          Gestión Integral de Presupuesto Para Entidades Públicas y Privadas.
          </li>
          <li>
          Asesoría Integral en Gestión Tributaria.
          </li>
          <li>
          Gestión Integral de Costos Institucionales.
          </li>
          <li>
          Auditoría Contable.
          </li>
        </ul>
        <ul
          className="fs-4 text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "720px" }}
        >
          <h2 className="text text-black mb-4">Área de Salud y Seguridad Social</h2>
          <li>
          Gestión Integral de Sistemas de Aseguramiento de la Calidad.
          </li>
          <li>
          Gestión Integral de Procesos de Habilitación y Acreditación de IPS y Empresas Administradoras de Planes de Beneficios.
          </li>
          <li>
          Gestión Integral de Programas de Auditoria Medica Orientados a la Calidad.
          </li>
          <li>
          Montaje e Implementación de Sistemas de Información y Atención Quejas y Reclamos.
          </li>
          <li>
          Recuperación de Cartera con Entes Territoriales y/o Empresas Administradoras de Planes de Beneficio.
          </li>
        </ul>
        <ul
          className="fs-4 text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "720px" }}
        >
          <h2 className="text text-black mb-4">Área Jurídica y Administrativa</h2>
          <li>
          Gestión Integral del Talento Humano.
          </li>
          <li>
          Procesos y Procedimientos de Contratación Pública.
          </li>
          <li>
          Procesos y Procedimientos de Contratación Civil y Comercial.
          </li>
        </ul>
      <Footer />
    </>
  )
}
