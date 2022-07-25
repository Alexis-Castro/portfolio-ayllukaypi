import { Logos } from '../../components/Logos';
import { Section } from '../../components/Section';
import { Fotos3D } from './Fotos3D';
import "spotlight.js";
import { Corte } from '../../components/Corte';
import { useState } from 'react';


export const Inicio = ({ proyecto, frase, principal, descripcion, archivos3D }) => {

   const [showModal, setShowModal] = useState(false);


   // console.log(archivos3D);

   return (
      <>
         <Section className={`min-h-screen mb-8`}>
            <Logos className={"left-16 bg-logo-cyan -z-10"} />
            <div className="container mx-auto mb-5">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-12">
                  <h2 className='uppercase text-[4.2rem] tracking-tight leading-none font-bold text-azul-oscuro text-center'>
                     <span className='inline-block mr-2'>
                        <img src={"./assets/img/triangulo.svg"} width="25" alt="" />
                     </span>
                     {proyecto}
                     <p className="text-[2.6rem] uppercase font-bold">{frase}</p>
                  </h2>

               </div>

               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-5">
                  <figure className='block relative mb-1'>
                     <a
                        href={`./assets/img/${principal}.webp`}
                        className="block spotlight"
                     >
                        <picture>
                           <source
                              srcSet={`./assets/img/${principal}.avif`}
                              type='image/avif'
                           />
                           <source
                              srcSet={`./assets/img/${principal}.webp`}
                              type='image/webp'
                           />
                           <img
                              src={`./assets/img/${principal}.jpg`}
                              width={"100%"}
                              height={"100%"}
                              alt={proyecto}
                           />
                        </picture>

                     </a>
                     {/* <VideoYT id={id}/> */}
                  </figure>

               </div>

               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-5">
                  <p className='text-azul-oscuro text-justify text-2xl'>
                     {descripcion}
                  </p>
               </div>

               <div className="grid grid-cols-2 mb-5">
                  <Fotos3D
                     archivoFoto={archivos3D[0]}
                  />
                  <Fotos3D
                     archivoFoto={archivos3D[1]}
                  />
               </div>

               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">

                  {
                     proyecto === "Villa los Parques" 
                     
                     ?

                     <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                           <span className='inline-block mr-2'>
                              <img src={"./assets/img/triangulo.svg"} width="10" alt="Adorno" />
                           </span>
                           <p className='text-azul-claro uppercase font-bold text-xl'>Prueba el recorrido 360° de Villa los Parques</p>
                        </div>
                        <button
                           className='text-white w-full md:w-auto md:first:mb-0 bg-azul-oscuro rounded-lg text-sm px-4 py-1.5 text-center font-bold shadow-lg transition-transform duration-200 hover:scale-105 md:text-lg first:mb-3 flex items-center'
                           onClick={ () => { setShowModal(true) }}
                        >
                           360°
                           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6C6.3 6 2 8.15 2 11c0 2.45 3.19 4.38 7.71 4.88l-.42.41a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-2-2a1 1 0 0 0-1.42 1.42l.12.11C6 13.34 4 12 4 11c0-1.22 3.12-3 8-3s8 1.78 8 3c0 .83-1.45 2-4.21 2.6a1 1 0 0 0-.79 1.19a1 1 0 0 0 1.19.77c3.65-.8 5.81-2.5 5.81-4.56c0-2.85-4.3-5-10-5Z"/></svg>
                        </button>
                     </div>

                     :

                     <div className='flex items-center'>
                        <span className='inline-block mr-2'>
                           <img src={"./assets/img/triangulo.svg"} width="10" alt="Adorno" />
                        </span>
                        <p className='text-azul-claro uppercase font-bold text-xl'>Fotos representativas 3D del proyecto</p>

                     </div>

                  }

               </div>


            </div>
            <Corte />

         </Section>

         {
            showModal ?
            (
               <div className={`items-center flex-col justify-center overflow-hidden fixed z-40 flex inset-0`} id="embed-360">
                  <div className={`bg-[rgba(10,10,10)]/80 absolute inset-0`}></div>
         
                  <div className="modal-content-360 h-full left-0 fixed top-0 w-full z-[500]">
         
                     <iframe 
                        src="https://ayllukaypi.pe/files/360/villa-los-parques" 
                        // className="min-h-screen" 
                        width="100%" 
                        height="100%"
                        frameBorder="0"
                        // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
         
                     >
                     </iframe>
         
                  </div>
         
                  <button
                     className="text-white w-full md:w-auto md:first:mb-0 bg-azul-oscuro rounded-lg text-sm px-4 py-1.5 text-center uppercase font-bold shadow-lg transition-transform duration-200 hover:scale-105 md:text-lg first:mb-3 flex items-center absolute top-20 right-0 z-[500]"
                     id="close-360"
                     aria-label="close"
                     onClick={() => setShowModal(false)}
                  >
                     Volver
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                     </svg>
                  </button>
               </div>
            ) : null

         }
      
      </>
   )
}
