import { SpeedDialog } from "../components/dialog/SpeedDialog";
import { Footer } from "../components/footer/Footer";
import { Background } from "../components/main/Background";
import { Contenido } from "../components/main/Contenido";

export const Main = () => {
  return (
    <>
        <Background />
        <Contenido />
        <Footer />
        <SpeedDialog />
        
    </>
  );
};
