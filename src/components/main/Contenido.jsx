import { Link } from "react-router-dom";

export const Contenido = () => {
  return (
    <>
      <div className="w-full flex justify-center my-10 px-4 mt-5">
        <p
          className="text-center text-center mx-auto"
          style={{
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "#645b5b",
            maxWidth: "800px",
            lineHeight: "1.6",
          }}
        >
          Nuestra Fundación FUPROCAR, es una entidad sin ánimo de lucro que
          atendiendo a su carácter especializado procesa el desarrollo propio,
          de nuestros clientes y de la comunidad en general, atendiendo los
          diversos frentes sociales y en especial en el campo Contable,
          Administrativo, Jurídico y de Salud.
        </p>
      </div>

      <section className="py-5">
  <div className="container my-5">
    <h2 className="text-center mb-5  position-relative"
      style={{ fontfamily: "Playfair Display", color: "#645b5b" }}>
      <span
        className="d-inline-block px-4 bg-white position-relative z-1"
        style={{ color: "rgb(80, 143, 235)",
            fontSize: "46px",
          }}
      >
        La fundación
      </span>
      <hr className="title-line position-absolute top-50 start-0 w-100 translate-middle-y m-0" />
    </h2>

    <div className="row text-center gy-5"
        style={{fontFamily: "sans-serif"}}
     >
      {/* Quienes Somos */}
      <div className="col-md-4 border-md-end" style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ color: "rgb(80, 143, 235)", fontSize: "36px" }}>Quienes Somos</h3>
        <ol
          className="fs-4 text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "320px" }}
        >
          <li>
            Misión: servicios técnicos y profesionales de asesorías e
            interventorías.
          </li>
          <li>
            Visión: FUPROCAR, está comprometida con el desarrollo integral de
            nuestros usuarios y de la comunidad en general.
          </li>
        </ol>
        <div className="text-center mt-4">
          <button
            className="btn rounded-pill p-3 fw-bold"
            style={{
              backgroundColor: "rgb(80, 143, 235)",
              color: "white",
            }}
          >
           <Link to="/nosotros" style={{ color: "white", textDecoration: "none" }}>
            OBTENER MÁS INFORMACIÓN</Link>
          </button>
        </div>
      </div>

      {/* Valores */}
      <div className="col-md-4 border-md-end text-center" 
        style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ color: "rgb(80, 143, 235)"
            , fontSize: "36px"
         }}>Valores</h3>
        <ol
          className="fs-4 text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "320px" }}
        >
          <li>Eficiencia.</li>
          <li>Oportunidad.</li>
          <li>Responsabilidad.</li>
        </ol>
        <div className="text-center mt-4">
          <button
            className="btn rounded-pill p-3 fw-bold"
            style={{
              backgroundColor: "rgb(80, 143, 235)",
              fontFamily: "sans-serif",
              color: "white",
            }}
          >
            <Link to="/valores" style={{ color: "white", textDecoration: "none" }}>
            OBTENER MÁS INFORMACIÓN</Link>
          </button>
        </div>
      </div>

      {/* Portafolio en áreas */}
      <div className="col-md-4 ">
        <h3 style={{ color: "rgb(80, 143, 235)"
            , fontSize: "36px"
         }}>Portafolio en áreas</h3>
        <ol
          className="fs-4 text-start mx-auto"
          style={{ paddingTop: "30px", color: "#645b5b", maxWidth: "320px" }}
        >
          <li>Financiera.</li>
          <li>Salud y seguridad social.</li>
          <li>Jurídica y administrativa.</li>
        </ol>
        <div className="text-center mt-4">
          <button
            className="btn rounded-pill p-3 fw-bold"
            style={{
              backgroundColor: "rgb(80, 143, 235)",
              color: "white",
            }}
          >
            <Link to="/portafolio" style={{ color: "white", textDecoration: "none" }}>
            OBTENER MÁS INFORMACIÓN</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
