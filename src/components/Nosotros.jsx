import { Section } from './Section'
import styles2 from '../styles/Nosotros.module.css'
import { Logos } from '../components/Logos'
import { Corte } from './Corte'

export const Nosotros = () => {
   return (
      <>
         <div className='relative min-h-screen'>
            <Logos className={"left-16 bg-logo-cyan z-10"} />

            <Section className={`${styles2.nosotros} bg-azul-oscuro z-0`}>

               <video
                  className="absolute left-0 right-0 top-0 bottom-0 object-cover h-full w-full -z-10"
                  width="100%"
                  height="100%"
                  playsInline muted
                  autoPlay loop
               >
                  <source
                     src="./assets/video/personal.mp4"
                     type="video/mp4"
                  />
               </video>

               <div className="container mx-auto">
                  <div className='flex flex-col justify-between '>
                     <div className="flex items-center justify-between">
                        <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3'>
                           <h2 className='uppercase text-5xl font-bold text-gray-50 z-20'>
                              <span className='inline-block mr-1'>
                                 <img src={"./assets/img/triangulo.svg"} width="16" alt="" />
                              </span>
                              Primero <span className='text-xl'>te contamos</span> ¡quienes somos!
                           </h2>
                        </div>

                     </div>

                  </div>

               </div>

            </Section>

            <Section className={""}>
               <div className="container mx-auto py-5 mb-8">
                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none text-justify'>
                     <p className='text-3xl text-azul-oscuro mb-5 '>
                        Somos una empresa Peruana del rubro de bienes raíces nacida en Chiclayo, ofrecemos hace 7 años el mejor asesoramiento en inversiones inmobilaria, a través de las más exclusivas lotizaciones, haciendo crecer exponencialmente la inversión de nuestro cliente, con un alto retorno de plusvalía.

                     </p>
                     <p className='text-3xl text-azul-oscuro'>
                        Como empresa estamos construyendo un legado único, que prevalezca en el tiempo y hoy lo estamos logrando.
                     </p>

                  </div>
               </div>
            </Section>

            <Corte className={"mb-5"} />

         </div>

         <Section className={`${styles2.premios} min-h-screen`}>
            <div className="container mx-auto">
               <div className='flex flex-col justify-between '>
                  <div className="flex items-center justify-between">
                     <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3 '>
                        <h2 className='uppercase text-4xl font-bold text-azul-oscuro mb-3'>
                           Reconocimientos y Premios Obtenidos
                        </h2>
                        <p className="font-medium text-azul-oscuro">
                           <span className='inline-block mr-2'>
                              <img src={"./assets/img/triangulo.svg"} width="7" alt="" />
                           </span>
                           Aquí hogar, aquí familia.
                        </p>
                     </div>

                     <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                        <picture>
                           <img src={"./assets/img/logo-azul-2.png"} width="80" alt="logo" />
                        </picture>
                     </div>

                  </div>
               </div>

            </div>
         </Section>


      </>

   )
}
