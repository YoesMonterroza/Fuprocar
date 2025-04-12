
export const ValoresContent = () => {
  return (
    <>
     

      <section className="py-5">
  <div className="container my-5">
    <h2 className="text-center mb-6  position-relative"
      style={{ fontfamily: "Playfair Display", marginBottom: "100px", color: "#645b5b" }}>
      <span
        className="d-inline-block px-4 bg-white position-relative z-1"
        style={{ color: "rgb(80, 143, 235)",
            fontSize: "46px",
          }}
      >
        Valores institucionales
      </span>
      <hr className="title-line position-absolute top-50 start-0 w-100 translate-middle-y m-0" />
    </h2>

    <div className="row text-center gy-5"
        style={{fontFamily: "sans-serif"}}
     >
      {/* Quienes Somos */}
      <div className="col-md-4 border-md-end" style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ color: "rgb(80, 143, 235)", fontSize: "36px" }}>Eficiencia</h3>
        <p
        className="text-center text-center mx-auto"
        style={{
          paddingTop: "30px",
          fontFamily: "sans-serif",
          fontSize: "25px",
          color: "#645b5b",
          maxWidth: "800px",
          
        }}>
        Nuestra Cooperativa la entendemos
         como el conjunto de acciones tendientes
          a racionalizar al máximo los insumos tanto de servicios
           como de suministros propios y de nuestros clientes tendientes
           a obtener el resultado deseado al menor costo posible.
        </p>
        <div className="text-center mt-4">
          
        </div>
      </div>

      {/* Valores */}
      <div className="col-md-4 border-md-end text-center" 
        style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ color: "rgb(80, 143, 235)"
            , fontSize: "36px"
         }}>Oportunidad</h3>
         <p
        className="text-center text-center mx-auto"
        style={{
          paddingTop: "30px",
          fontFamily: "sans-serif",
          fontSize: "25px",
          color: "#645b5b",
          maxWidth: "800px",
          
        }}>
       Entendida como el compromiso permanente de todo nuestro equipo, 
      en el logro de las metas y resultados propuestos en el tiempo requerido
       por la institución y nuestros usuarios.
        </p>
        <div className="text-center mt-4">
          
        </div>
      </div>

      {/* Portafolio en áreas */}
      <div className="col-md-4 ">
        <h3 style={{ color: "rgb(80, 143, 235)"
            , fontSize: "36px"
         }}>Responsabilidad</h3>
         <p
        className="text-center text-center mx-auto"
        style={{
          paddingTop: "30px",
          fontFamily: "sans-serif",
          fontSize: "25px",
          color: "#645b5b",
          maxWidth: "800px",
          
        }}>
       Entendida como el principio que nos obliga a comprometernos solo con metas o resultados 
       en los que podamos satisfacer a nuestra institución y a nuestros usuarios en el tiempo 
       acordado con la utilización racional de recursos financieros, técnicos y de suministros.
        </p>
        <div className="text-center mt-4">
          
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
