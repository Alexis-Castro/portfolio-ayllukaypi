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
               principal={"villa-ramsa-3d"}
               archivos3D={["villa-ramsa-3d-2", "villa-ramsa-3d-3"]}
               
            />
   
            <Caracteristicas
               proyecto={"Villa Ramsa"}
               archivoMapa={"mapa-villa-ramsa"}
               urlUbicacion={"https://goo.gl/maps/mYx63bwwm7sp8KFE6"}
               features={
                  ["194 lotes habilitados para casas en zona de expansión inmobiliaria.", "Lotes desde 90 m2 a más.", "Parques recreativos y áreas verdes.", "Servicios básicos: Luz (posteado) y agua (matriz troncal).", "Contrato de compra/venta, minuta y escritura pública en 24 horas."]
                  
               }
            />
   
            <Galeria
               titulo={"A un paso de la ciudad turística de Mórrope"}
               fotos={data}
            />
         </>
      )
   }

}
