import { useState } from "react";
import { SpeedDialog } from "../components/dialog/SpeedDialog"
import { Footer } from "../components/footer/Footer"
import ResponsiveNav from "../components/Header/ResponsiveNav"

export const ContactoPage = () => {
  
  const [abierto, setAbierto] = useState(false);

  const horarios = [
    { dia: "lun", horas: "08:00 a. m. – 05:00 p. m." },
    { dia: "mar", horas: "08:00 a. m. – 05:00 p. m." },
    { dia: "mié", horas: "08:00 a. m. – 05:00 p. m." },
    { dia: "jue", horas: "08:00 a. m. – 05:00 p. m." },
    { dia: "vie", horas: "08:00 a. m. – 05:00 p. m." },
    { dia: "sáb", horas: "08:00 a. m. – 12:00 p. m." },
    { dia: "dom", horas: "Cerrado" },
  ];
  const hoy = new Date().getDay(); 
  const diasMap = [6, 0, 1, 2, 3, 4, 5]; 

  const horarioHoy = horarios[diasMap[hoy]];

  return (
    <>
    <ResponsiveNav/>
    <SpeedDialog />

    <h2 className="text-center mb-5 mt-5 position-relative"
      style={{ fontfamily: "Playfair Display", color: "#645b5b" }}>
      <span
        className="d-inline-block px-4 bg-white position-relative z-1"
        style={{ color: "rgb(80, 143, 235)",
            fontSize: "46px",
          }}
      >
        Comunícate con nosotros
      </span>
      <hr className="title-line position-absolute top-50 start-0 w-100 translate-middle-y m-0" />
    </h2>

    <ul
          className="fs-4 text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "780px" }}
          
        >
          <h2 className="text text-black mb-4"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "780px", paddingLeft: "50px" }}
          >Telefono: 605 6700064 || Celular: 3157881822
          </h2>

          <h3 className="text accordiontext-center"
          style={{ fontSize: "20px", color: "#645b5b", }}
          >Nos encontramos en Centro; Plazoleta Telecom Edificio Lequerica Piso 3 Oficina 310.
          </h3>
          <h2 className="text text-center text-black mb-4"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "780px" }}
          >
            Fundación Progresista de Cartagena
          </h2>
          <h2 className="text text-center text-black mb-4"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "780px" }}
          >
            Horario
          </h2>
          </ul>
          
          <div className="text-center mt-4 mb-5">

      {/* Línea contraída */}

      <div
        className="d-flex justify-content-center align-items-center gap-2 text-secondary"
        style={{ cursor: "pointer", fontSize: "20px" }}
        onClick={() => setAbierto(!abierto)}
      >
        {!abierto && (
          <span className="text-muted" style={{ fontSize: "20px" }}>
            Abre hoy
          </span>
        )}
        <span>{horarioHoy.dia}</span>
        <span className={!abierto ? "hover-blue" : ""}>
          {horarioHoy.horas}
        </span>
        <span>{abierto ? "▴" : "▾"}</span>
      </div>

      {/* Lista completa */}
      {abierto && (
        <div className="text-secondary mt-2" style={{ fontSize: "20px" }}>
          {horarios.map((h, i) => (
            <div key={i} className="d-flex justify-content-center gap-2">
              <span
                className={
                  h.dia === horarioHoy.dia ? "" : ""
                }
              >
                {h.dia}
              </span>
              <span
                className={
                  h.dia === horarioHoy.dia ? "" : ""
                }
              >
                {h.horas}
              </span>
            </div>
          ))}
        </div>
      )}

      
      <style>{`
        .hover-blue:hover {
          color: rgb(80, 143, 235);
        }
      `}</style>
    </div>

    <Footer />

    </>
  )
}
