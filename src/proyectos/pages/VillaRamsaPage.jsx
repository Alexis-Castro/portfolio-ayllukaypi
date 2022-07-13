import { Portada } from "../components/Portada"
import { Inicio } from "../components/Inicio"
import { Caracteristicas } from "../components/Caracteristicas"
import { Galeria } from "../components/Galeria"

export const VillaRamsaPage = () => {
   return (
      <>
         <Portada proyecto={"Villa Ramsa"}/>

         <Inicio 
            proyecto={"Villa Ramsa"} 
            frase={"Tu inversión inteligente"}
            descripcion={'Un proyecto ubicado en una zona de gran expansión inmobiliaria, con cercanía a la histórica playa Naylamp.'}
            id={"qWbvm8kpfTs"}
            src360={"/assets/img/villa-los-parques-5.webp"}
         />

         <Caracteristicas 
            archivoMapa={"mapa-white"}
         />

         <Galeria />
      </>
   )
}
