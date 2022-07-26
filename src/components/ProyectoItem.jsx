
import { Link } from 'react-router-dom';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export const ProyectoItem = ({ fileLogo, className, nombreImg, texto, ruta, alt }) => {
   return (
      <>
         <div className="">
            <div className="mb-4">
               <figure>
                  <picture>
                     <LazyLoadImage 
                        src={`./assets/img/${fileLogo}.svg`}
                        effect="blur"
                        alt='Logo'
                        width={"100%"}
                        className={`${className}`}
                     
                     />
                     {/* <img className={`${className}`} src={`./assets/img/${fileLogo}.svg`} width="100%" alt="Logo Proyecto" /> */}
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
                  <LazyLoadComponent >
                     <figure>
                           <picture>
                              <source srcSet={`./assets/img/${nombreImg}.avif`} type="image/avif" />
                              <source srcSet={`./assets/img/${nombreImg}.webp`} type="image/webp" />
                              <img className="h-56" loading="lazy" src={`./assets/img/${nombreImg}.png`} width="100%" height="100%" alt={alt} />
                           </picture>
                     </figure>
                  </LazyLoadComponent>

               </Link>
            </div>
         </div>

      </>
   )
}
