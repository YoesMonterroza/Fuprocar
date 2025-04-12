import { SpeedDialog } from "../components/dialog/SpeedDialog"
import { Footer } from "../components/footer/Footer"
import ResponsiveNav from "../components/Header/ResponsiveNav"

export const CondicionesPage = () => {
  return (
    <>
    <>
        <ResponsiveNav />
        <SpeedDialog />
        <h2 className="text-center mb-5 position-relative"
          style={{ fontfamily: "Playfair Display", color: "#645b5b", marginTop: "100px" }}>
          <span
            className="d-inline-block px-4 bg-white position-relative z-1"
            style={{ color: "rgb(80, 143, 235)",
                fontSize: "46px",
              }}
          >
            Términos y condiciones
          </span>
          <hr className="title-line position-absolute top-50 start-0 w-100 translate-middle-y m-0" />
        </h2>
        <div className="w-full flex justify-center my-10 px-4 mt-5">
            <p
              className="text-center text-center mx-auto"
              style={{
                fontFamily: "sans-serif",
                fontSize: "18px",
                color: "#645b5b",
                maxWidth: "800px",
                lineHeight: "1.6",
                marginBottom: "100px",
              }}
            >
                La sección de Términos y condiciones es como un contrato entre tus clientes y tú.
                Pones la información y los servicios disponibles a tus clientes y tus clientes deben seguir las reglas.  
                <br />
                <br />
                Los puntos en común en un acuerdo de términos y condiciones te permite hacer lo siguiente:
                <br />
                
            <ul
          className="text text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", fontSize: "18px" }}
        >
          <li>
          Retirar y cancelar servicios y hacer transacciones financieras.
          </li>
          <li>
          Gestionar las expectativas del cliente, como la responsabilidad legal por
          los errores de información o el tiempo en que el sitio web está inactivo.
          </li>
          <li>
          Explicar las reglas de los derechos de autor, como la atribución, adaptación, uso comercial o no comercial, etc.
          </li>
          <li>
          Establecer reglas para el comportamiento de los usuarios, como prohibir conductas ilegales, como expresiones
          de odio, acoso, promociones, mensajes no deseados, etc.
          </li>
          <li>
          Deshabilitar las cuentas del usuario.
          </li>
          <li>
          Escribir otros términos o condiciones que te protejan a ti o a tu audiencia.
          </li>
        </ul>
          
                </p>
          </div>
        <Footer />
        </>
    
    
    </>
  )
}
