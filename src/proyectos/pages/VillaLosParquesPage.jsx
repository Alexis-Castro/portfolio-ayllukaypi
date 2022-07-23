import { Portada } from "../components/Portada"
import { Inicio } from "../components/Inicio"
import { Caracteristicas } from "../components/Caracteristicas"
import { Galeria } from "../components/Galeria"
import { Loading } from "../components/Loading"
import { useFetchGallery } from "../../hooks/useFetchGallery"

export const VillaLosParquesPage = () => {

   const { data, loading } = useFetchGallery();

   // console.log(data);

   if (loading) {
      return <Loading />

   } else {

      return (
         <>
            <Portada 
               proyecto={"Villa los Parques"}
               hero={"villa-parques"} 
            />
   
            <Inicio
               proyecto={"Villa los Parques"}
               frase={"El paraíso verde que mereces"}
               descripcion={'Un proyecto ideal para tu casa de campo, rodeado de áreas verdes, considerado el "último bastión moche".'}
               id={"qWbvm8kpfTs"}
               archivo360={"villa-los-parques-5"}
            />
   
            <Caracteristicas
               proyecto={"Villa los Parques"}
               archivoMapa={"mapa-white"}
               urlUbicacion={"https://maps.app.goo.gl/HQxNUHQgqhPpFgYf7"}
            />
   
            <Galeria 
               fotos={data}
                  
            />
   
         </>
      )
   }

}
