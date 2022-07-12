import { Section } from './Section'
import styles2 from '../styles/Nosotros.module.css'
import { Logos } from '../components/Logos'

export const Nosotros = () => {
   return (
      <>
         <div className='relative min-h-screen'>
            <Logos className={"left-12 "} />
            <Section className={`${styles2.nosotros} bg-azul-oscuro z-0`}>

               <div className="container mx-auto">
                  <div className='flex flex-col justify-between '>
                     <div className="flex items-center justify-between">
                        <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3'>
                           <h2 className='uppercase text-5xl font-bold text-azul-oscuro z-20'>
                              <span className='inline-block mr-1'>
                                 <img src={"../src/assets/img/triangulo.svg"} width="16" alt="" />
                              </span>
                              Primero <span className='text-xl'>te contamos</span> ¡quienes somos!
                           </h2>
                        </div>

                     </div>

                  </div>

               </div>

            </Section>

            <Section className={""}>
               <div className="container mx-auto">
                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none text-justify'>
                     <p className='text-3xl text-azul-oscuro mb-5 '>
                        Somos una empresa Peruana del rubro de bienes raíces nacida en Chiclayo, ofreciendote hace 7 años el mejor asesoramiento en inversiones inmobilaria, a través de las más exclusivas lotizaciones, haciendo crecer exponencialmente la inversión de nuestro cliente, con un alto retorno de plusvalía.

                     </p>
                     <p className='text-3xl text-azul-oscuro'>
                        Como empresa estamos construyendo un legado único, que prevalezca en el tiempo y hoy lo estamos logrando.
                     </p>

                  </div>
               </div>
            </Section>
         </div>

         <Section className={"bg-gray-300 h-screen"}> 
            <div className="container mx-auto">
               <div className='flex flex-col justify-between '>
                  <div className="flex items-center justify-between">
                     <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3 '>
                        <h2 className='uppercase text-4xl font-bold text-azul-oscuro mb-3'>
                           Reconocimientos y Premios Obtenidos
                        </h2>
                        <p className="font-medium text-azul-oscuro">
                           <span className='inline-block mr-2'>
                              <img src={"../src/assets/img/triangulo.svg"} width="7" alt="" />
                           </span>
                           Aquí hogar, aquí familia.
                        </p>
                     </div>

                     <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                        <picture>
                           <img src={"../src/assets/img/logo-azul-2.png"} width="80" alt="logo" />
                        </picture>
                     </div>

                  </div>
               </div>

            </div>
         </Section>
      </>

   )
}
