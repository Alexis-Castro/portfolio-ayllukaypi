import { Logos } from '../../components/Logos'
import { Section } from '../../components/Section'
import "spotlight.js";
import { Link } from 'react-router-dom';
import { ItemGaleria } from './ItemGaleria';

export const Galeria = ({ titulo, fotos }) => {

   // console.log(fotos);

   return (
      <Section className={"min-h-screen"}>
         <Logos className={"left-16 bg-logo-cyan z-10"} />

         <div className="container mx-auto">
            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-12">
               <div className="uppercase font-bold text-center ">

                  <p className='text-azul-oscuro text-5xl tracking-tight'> 
                     <span className='inline-flex mr-2'>
                        <img src={"./assets/img/triangulo.svg"} width="18" alt="" />
                     </span>
                     {titulo}
                  </p>
               </div>

            </div>


            <div className="grid grid-cols-2 ">

               {
                  fotos.map(({ nombreArchivo, width, height, alt }, key) => {
                     return (
                        <ItemGaleria
                           key={key}
                           nombreArchivo={nombreArchivo}
                           width={width}
                           height={height}
                           alt={alt}
                        />
                     )
                  })
               }

               {/* <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none col-span-2'>
                  <figure className="block relative">
                     <a
                        href={"./assets/img/villa-los-parques-2.webp"}
                        className="block spotlight"
                     >
                        <picture>
                           <source
                              srcSet={"./assets/img/villa-los-parques-2.avif"}
                              type='image/avif'
                           />
                           <source
                              srcSet={"./assets/img/villa-los-parques-2.webp"}
                              type='image/webp'
                           />
                           <img
                              src={"./assets/img/villa-los-parques-2.png"}
                              width="100%"
                              alt="Ubicación del proyecto"
                           />
                        </picture>

                     </a>
                  </figure>
               </div>

               <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                  <figure className="block relative">
                     <a
                        href={"./assets/img/villa-los-parques-3.webp"}
                        className="block spotlight"
                     >
                        <picture>
                           <source
                              srcSet={"./assets/img/villa-los-parques-3.avif"}
                              type='image/avif'
                           />
                           <source
                              srcSet={"./assets/img/villa-los-parques-3.webp"}
                              type='image/webp'
                           />
                           <img
                              src={"./assets/img/villa-los-parques-3.png"}
                              width="100%"
                              alt="Foto del proyecto"
                           />
                        </picture>
                     </a>
                  </figure>
               </div>

               <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                  <figure className="block relative">
                     <a
                        href={"./assets/img/villa-los-parques-5.webp"}
                        className="block spotlight"
                     >
                        <picture>
                           <source
                              srcSet={"./assets/img/villa-los-parques-5.avif"}
                              type='image/avif'
                           />
                           <source
                              srcSet={"./assets/img/villa-los-parques-5.webp"}
                              type='image/webp'
                           />
                           <img
                              src={"./assets/img/villa-los-parques-5.png"}
                              width="100%"
                              alt="Ubicación del proyecto"
                           />
                        </picture>
                     </a>
                  </figure>
               </div>

               <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                  <figure className="block relative">
                     <a
                        href={"./assets/img/villa-los-parques-4.webp"}
                        className="block spotlight"
                     >
                        <picture>
                           <source
                              srcSet={"./assets/img/villa-los-parques-4.avif"}
                              type='image/avif'
                           />
                           <source
                              srcSet={"./assets/img/villa-los-parques-4.webp"}
                              type='image/webp'
                           />
                           <img
                              src={"./assets/img/villa-los-parques-4.png"}
                              width="100%"
                              alt="Ubicación del proyecto"
                           />
                        </picture>
                     </a>
                  </figure>
               </div>

               <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                  <figure className="block relative">
                     <a
                        href={"./assets/img/villa-los-parques-3.webp"}
                        className="block spotlight"
                     >
                        <picture>
                           <source
                              srcSet={"./assets/img/villa-los-parques-3.avif"}
                              type='image/avif'
                           />
                           <source
                              srcSet={"./assets/img/villa-los-parques-3.webp"}
                              type='image/webp'
                           />
                           <img
                              src={"./assets/img/villa-los-parques-3.png"}
                              width="100%"
                              alt="Ubicación del proyecto"
                           />
                        </picture>
                     </a>
                  </figure>
               </div> */}

            </div>

            <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
               <div className="flex items-center justify-end">
                  <Link
                     to="/"
                     className="text-white w-full md:w-auto md:first:mb-0 bg-azul-oscuro rounded-lg text-sm px-4 py-1.5 text-center uppercase font-bold shadow-lg transition-transform duration-200 hover:scale-105 md:text-lg first:mb-3 flex items-center"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi inline-block bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                     </svg>
                     Volver
                  </Link>

               </div>
            </div>


         </div>
      </Section>
   )
}
