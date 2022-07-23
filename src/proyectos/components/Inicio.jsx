import { Logos } from '../../components/Logos';
import { Section } from '../../components/Section';
import { Fotos360 } from './Fotos360';
import { VideoYT } from './VideoYT';

export const Inicio = ({ proyecto, frase, descripcion, id, archivo360 }) => {

   return (
      <Section className={`min-h-screen mb-8`}>
         <Logos className={"left-16 bg-logo-cyan -z-10"} />
         <div className="container mx-auto">
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
                  <VideoYT id={id}/>
               </figure>
               <div className='bg-azul-oscuro p-2'>
                  <p className='text-gray-200 text-right'>Dale un vistazo a este video y conoce más sobre el proyecto...</p>
               </div>
            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-5">
               <p className='text-azul-oscuro text-justify text-2xl'>
                  {descripcion}
               </p>
            </div>

            <div className="grid grid-cols-2 mb-5">
               <Fotos360 
                  archivoFoto={archivo360}
               />
               <Fotos360 
                  archivoFoto={archivo360}
               />
               {/* <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                  <figure className='block relative'>
                     <picture>
                        <img src={"./assets/img/villa-los-parques-5.webp"} width="100%" alt="" />

                     </picture>
                  </figure>
               </div>
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                  <figure className='block relative'>
                     <picture>
                        <img src={"./assets/img/villa-los-parques-5.webp"} width="100%" alt="" />

                     </picture>
                  </figure>
               </div> */}
            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
               <p className='text-azul-claro uppercase font-bold text-xl'>
                  <span className='inline-block mr-2'>
                     <img src={"./assets/img/triangulo.svg"} width="10" alt="" />
                  </span>
                  <span>Fotos representativas 3D del proyecto</span>
               </p>
            </div>

         </div>
      </Section>
   )
}
