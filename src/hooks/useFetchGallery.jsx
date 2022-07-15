import { useEffect, useState } from "react"
import { getGaleria } from "../proyectos/helpers/getGaleria";


export const useFetchGallery = ( archivoJson = "villa-los-parques" ) => {

   const [galeria, setGaleria] = useState({
      data: [],
      loading: true,
   });

   useEffect(() => {
      getGaleria(archivoJson)
         .then( data => {

            setGaleria({
               data: data,
               loading: false,
            });
         })
         // .catch( err => console.log(err) )
         // .finally( () => setGaleria({ loading: false }) )
   }, [])

   return galeria; // { data: [], loading: true }
}