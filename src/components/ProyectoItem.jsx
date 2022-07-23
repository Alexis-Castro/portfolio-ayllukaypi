
import { Link } from 'react-router-dom';

export const ProyectoItem = ({ fileLogo, className, nombreImg, texto, ruta, alt }) => {
   return (
      <>
         <div className="">
            <div className="mb-4">
               <figure>
                  <picture>
                     <img className={`${className}`} src={`./assets/img/${fileLogo}.svg`} width="100%" alt="Logo Proyecto" />
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
                        <source srcSet={`./assets/img/${nombreImg}.avif`} type="image/avif" />
                        <source srcSet={`./assets/img/${nombreImg}.webp`} type="image/webp" />
                        <img className="h-56" loading="lazy" src={`./assets/img/${nombreImg}.png`} width="100%" height="100%" alt={alt} />
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
