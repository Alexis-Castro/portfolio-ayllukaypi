import { Routes, Route } from "react-router-dom";
import { VillaLosParquesPage, VillaRamsaPage } from "../pages";

export const ProyectosRoutes = () => {
   return (
      <>
         <Routes >
            <Route path="/villa-los-parques" element={<VillaLosParquesPage />} />
            <Route path="/villa-ramsa" element={<VillaRamsaPage />} />

         </Routes>
      </>
   )
}
