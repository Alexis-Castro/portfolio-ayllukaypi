import { Routes, Route, Link } from "react-router-dom";
import { VillaLosParquesPage } from "../pages/VillaLosParquesPage";
import { VillaRamsaPage } from "../pages/VillaRamsaPage";

export const ProyectosRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="villa-los-parques" element={ <VillaLosParquesPage /> }/>
            <Route path="villa-ramsa" element={ <VillaRamsaPage />} />

         </Routes>
      </>
   )
}
