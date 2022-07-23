import { Portada } from "../components/Portada"
import { Inicio } from "../components/Inicio"
import { Caracteristicas } from "../components/Caracteristicas"
import { Galeria } from "../components/Galeria"
import { useFetchGallery } from "../../hooks/useFetchGallery"
import { Loading } from "../components/Loading"

export const VillaRamsaPage = () => {

   const { data, loading } = useFetchGallery("villa-ramsa");

   if (loading) {

      return <Loading />

   } else {

      return (
         <>
            <Portada 
               proyecto={"Villa Ramsa"}
               hero={"villa-ramsa"}
            />
   
            <Inicio 
               proyecto={"Villa Ramsa"} 
               frase={"Tu inversión inteligente"}
               descripcion={'Un proyecto ubicado en una zona de gran expansión inmobiliaria, con cercanía a la histórica playa Naylamp.'}
               id={"qWbvm8kpfTs"}
               archivo360={"villa-los-parques-3"}
            />
   
            <Caracteristicas
               proyecto={"Villa Ramsa"}
               archivoMapa={"mapa-villa-ramsa"}
               urlUbicacion={"https://goo.gl/maps/mYx63bwwm7sp8KFE6"}
            />
   
            <Galeria 
               fotos={data}
            />
         </>
      )
   }

}
