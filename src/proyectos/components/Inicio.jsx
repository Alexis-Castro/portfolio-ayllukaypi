import { Logos } from '../../components/Logos';
import { Section } from '../../components/Section';
import { VideoYT } from './VideoYT';

export const Inicio = () => {
   return (
      <Section className={`min-h-screen mb-8`}>
         <Logos className={"left-16 grayscale -z-10"} />
         <div className="container mx-auto">
            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-12">
               <h2 className='uppercase text-6xl font-bold text-azul-oscuro text-center'>
                  <span className='inline-block mr-2'>
                     <img src={"../src/assets/img/triangulo.svg"} width="23" alt="" />
                  </span>
                  Villa los Parques
                  <p className="text-4xl uppercase font-bold">El paraíso verde que mereces</p>
               </h2>

            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-5">
               <figure className='block relative mb-1'>
                  <VideoYT />
               </figure>
               <div className='bg-azul-oscuro p-2'>
                  <p className='text-gray-200 text-right'>Dale un vistazo a este video y conoce más sobre el proyecto...</p>
               </div>
            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-5">
               <p className='text-azul-oscuro text-justify text-2xl'>
                  Un proyecto ideal para tu casa de campo, rodeado de áreas verdes, considerado el "último bastión moche".
               </p>
            </div>

            <div className="grid grid-cols-2 mb-5">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                  <figure className='block relative'>
                     <picture>
                        <img src={"../src/assets/img/villa-los-parques-5.webp"} width="100%" alt="" />

                     </picture>
                  </figure>
               </div>
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                  <figure className='block relative'>
                     <picture>
                        <img src={"../src/assets/img/villa-los-parques-5.webp"} width="100%" alt="" />

                     </picture>
                  </figure>
               </div>
            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
               <p className='text-azul-claro uppercase font-bold text-xl'>
                  <span className='inline-block mr-2'>
                     <img src={"../src/assets/img/triangulo.svg"} width="10" alt="" />
                  </span>
                  <span>Fotos representativas 3D del proyecto</span>
               </p>
            </div>

         </div>
      </Section>
   )
}
