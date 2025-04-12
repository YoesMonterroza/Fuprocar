import { SpeedDialog } from "../components/dialog/SpeedDialog"
import { Footer } from "../components/footer/Footer"
import ResponsiveNav from "../components/Header/ResponsiveNav"
import { ValoresContent } from "../components/valores/ValoresContent"

export const ValoresPage = () => {
  return (
    <>
            <ResponsiveNav/>
            <SpeedDialog />    
            <ValoresContent />
            <Footer />

    </>
  )
}
