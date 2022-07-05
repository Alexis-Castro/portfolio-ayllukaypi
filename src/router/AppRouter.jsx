import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { ProyectosRoutes } from "../proyectos/routes/ProyectosRoutes";

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />} />

            <Route path="/*" element={<ProyectosRoutes />} />
            
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
         </Routes>
      </>
   )
}
