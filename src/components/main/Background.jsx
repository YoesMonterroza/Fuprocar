import ResponsiveNav from '../Header/ResponsiveNav'

export const Background = () => {
  return (
    <>
      <ResponsiveNav />

      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{
            marginTop: "55px",
          backgroundImage: "url('/fondo.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
        }}
      >
        <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "4rem 3rem", 
          borderRadius: "10px",
          width: "100%",
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <h1 className="display-4 d-none d-md-block"
          style={{ color: "rgb(80, 143, 235)" }}
        >
          Bienvenido a
        </h1>
        <h1 className=" display-4 d-none d-md-block"
          style={{ color: "rgb(80, 143, 235)" }}>
        
          fuprocar
        </h1>

        <h2 className=" d-block d-md-none"
          style={{ color: "rgb(80, 143, 235)" }}>
          Bienvenido a fuprocar
        </h2>
      </div>
      </div>
    </>
  )
}
