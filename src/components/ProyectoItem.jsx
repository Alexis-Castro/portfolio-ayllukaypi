
import { Link } from 'react-router-dom';

export const ProyectoItem = ({ srcLogo, srcProyecto, texto, ruta }) => {
   return (
      <>
         <div className="">
            <div className="mb-4">
               <figure>
                  <picture>
                     <img src={srcLogo} width="100%" alt="Logo Proyecto" />
                  </picture>
               </figure>
            </div>

            <div className="">
               <p className="text-2xl mb-14 text-justify text-azul-oscuro leading-tight">
                  {texto}
               </p>
               <Link 
                  to={ruta}
               >
                  <figure>
                     <picture>
                        <img src={srcProyecto} width="100%" alt="Proyecto" />
                     </picture>
                  </figure>

               </Link>
            </div>
         </div>

         {/* <div className="">
               <div className="mb-4">
                  <figure>
                     <picture>
                        <img src={"./assets/img/logo-cyan-3.png"} width="100%" alt="" />
                     </picture>
                  </figure>
               </div>

               <div className="">
                  <p className="text-2xl mb-14 text-justify">
                     Un proyecto ubicado en una zona de gran expansión inmobiliaria, con cercanía a la histórica playa Naylamp.
                  </p>
                  <figure>
                     <picture>
                        <img src={"./assets/img/villa-los-parques-5.webp"} width="100%" alt="" />
                     </picture>
                  </figure>
               </div>
            </div> */}
      </>
   )
}
