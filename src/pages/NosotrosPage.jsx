import { SpeedDialog } from "../components/dialog/SpeedDialog"
import { Footer } from "../components/footer/Footer"
import ResponsiveNav from "../components/Header/ResponsiveNav"

export const NosotrosPage = () => {
  return (

    <>
    
    <ResponsiveNav/>
    <h2 className="text-center mb-5  position-relative"
      style={{ fontfamily: "Playfair Display", color: "#645b5b", marginTop: "150px" }}>
      <span
        className="d-inline-block px-4 bg-white position-relative z-1"
        style={{ color: "rgb(80, 143, 235)",
            fontSize: "46px",
          }}
      >
        Misión
      </span>
      <hr className="title-line position-absolute top-50 start-0 w-100 translate-middle-y m-0" />
    </h2>
    <p
          className="text-center mx-auto"
          style={{
            fontFamily: "sans-serif",
            color: "#645b5b",
            maxWidth: "800px",
            lineHeight: "1.6",
            paddingTop: "30px",
            fontSize: "25px",
          }}
        >
          FUPROCAR, es una fundación de servicios técnicos y profesionales de asesorías e interventorías
           en materia administrativa, contable, jurídica, económica y del sector salud, con un equipo
            Multidisciplinario de Especialistas, Profesionales, Tecnólogos y Técnicos con gran experiencia
            en sus respectivos campos de formación que se esmera en satisfacer las expectativas y necesidades
            de nuestros usuarios y nuestros clientes.
        </p>
        <h2 className="text-center mb-5  position-relative"
      style={{ fontfamily: "Playfair Display", color: "#645b5b", marginTop: "150px" }}>
      <span
        className="d-inline-block px-4 bg-white position-relative z-1"
        style={{ color: "rgb(80, 143, 235)",
            fontSize: "46px",
          }}
      >
        Visíon
      </span>
      <hr className="title-line position-absolute top-50 start-0 w-100 translate-middle-y m-0" />
    </h2>
    <p
          className="text-center mx-auto"
          style={{
            fontFamily: "sans-serif",
            color: "#645b5b",
            maxWidth: "800px",
            lineHeight: "1.6",
            paddingTop: "30px",
            fontSize: "25px",
          }}
        >
          FUPROCAR, está comprometida con el desarrollo integral de nuestros usuarios y de la
           comunidad en general por lo que se ha propuesto ser la Cooperativa prestadora de
            servicios de ASESORIAS Y CONSULTORIAS innovadora en el ramo de los servicios que
             brinda en la ciudad de Cartagena, La Costa Atlántica y la Nación en general, por
              lo que todos y cada uno de nuestros miembros asumimos el compromiso de la investigación
              y la gestión del conocimiento como una actitud de vida tanto personal como institucional,
              de tal forma que seamos reconocidos
           por nuestra calidad en los logros de nuestra misión y la de nuestros clientes.
        </p>

    <SpeedDialog />
    <Footer />
    
    </>
  )
}
