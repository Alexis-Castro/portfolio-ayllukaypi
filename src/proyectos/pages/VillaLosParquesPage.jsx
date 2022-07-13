import { Portada } from "../components/Portada"
import { Inicio } from "../components/Inicio"
import { Caracteristicas } from "../components/Caracteristicas"
import { Galeria } from "../components/Galeria"

export const VillaLosParquesPage = () => {
   return (
      <>
         <Portada proyecto={"Villa los Parques"} />

         <Inicio
            proyecto={"Villa los Parques"}
            frase={"El paraíso verde que mereces"}
            descripcion={'Un proyecto ideal para tu casa de campo, rodeado de áreas verdes, considerado el "último bastión moche".'}
            id={"qWbvm8kpfTs"}
            src360={"/assets/img/villa-los-parques-5.webp"}
         />

         <Caracteristicas 
            archivoMapa={"mapa-white"}
         />

         <Galeria 
            
         />

      </>
   )
}
