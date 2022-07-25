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

            {/* <div className="">
               <iframe src="https://ayllukaypi.pe/files/360/villa-los-parques" className="min-h-screen" width="100%" height="100%"></iframe>
            </div> */}
            <Portada 
               proyecto={"Villa los Parques"}
               hero={"villa-parques"} 
            />
   
            <Inicio
               proyecto={"Villa los Parques"}
               frase={"El paraíso verde que mereces"}
               descripcion={'Un proyecto ideal para tu casa de campo, rodeado de áreas verdes, considerado el "último bastión moche".'}
               principal={"villa-parques-3d"}
               archivos3D={["villa-los-parques-3d-1", "villa-los-parques-3d-2"]}
            />
   
            <Caracteristicas
               proyecto={"Villa los Parques"}
               archivoMapa={"mapa-white"}
               urlUbicacion={"https://maps.app.goo.gl/HQxNUHQgqhPpFgYf7"}
               features={
                  ["169 lotes habilitados para casas en zona turística y campestre.", "Parques recreativos y áreas verdes.", "Servicios básicos: Luz (posteado) y agua (matriz troncal).", "Contrato de compra/venta, minuta y escritura pública en 24 horas."]
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
