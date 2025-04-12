import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/Main"
import { NosotrosPage } from "../pages/NosotrosPage"
import { ContactoPage } from "../pages/ContactoPage"
import { CondicionesPage } from "../pages/CondicionesPage"
import { PoliticaPage } from "../pages/PoliticaPage"
import { PortafolioPage } from "../pages/PortafolioPage"
import { ValoresPage } from "../pages/ValoresPage"

export const FuprocarRoutes = () => {
  return (
    <>
    
        <Routes>

            <Route path="/" element={<Main/>} />
            <Route path="/nosotros" element={<NosotrosPage/>} />
            <Route path="/valores" element={<ValoresPage/>} />
            <Route path="/contacto" element={<ContactoPage/>} />
            <Route path="/condiciones" element={<CondicionesPage/>} />
            <Route path="/politica" element={<PoliticaPage/>} />
            <Route path="/portafolio" element={<PortafolioPage/>} />


        </Routes>
    
    </>
  )
}
