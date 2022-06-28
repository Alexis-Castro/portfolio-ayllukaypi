import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "../layout/Layout";

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
         </Routes>
      </>
   )
}
