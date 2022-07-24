import { Logos } from '../../components/Logos';
import { Section } from '../../components/Section';
import { Fotos360 } from './Fotos360';
import "spotlight.js";


export const Inicio = ({ proyecto, frase, principal, descripcion, archivos3D }) => {

   // console.log(archivos3D);

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
               <Fotos360
                  archivoFoto={archivos3D[0]}
               />
               <Fotos360
                  archivoFoto={archivos3D[1]}
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
