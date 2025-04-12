import { SpeedDialog } from "../components/dialog/SpeedDialog"
import { Footer } from "../components/footer/Footer"
import ResponsiveNav from "../components/Header/ResponsiveNav"


export const PoliticaPage = () => {
  return (
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
        Política de privacidad
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
          Próximamente: Política de privacidad
        </p>
      </div>
    <Footer />
    </>
  )
}
