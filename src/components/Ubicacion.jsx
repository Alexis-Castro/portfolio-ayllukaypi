import { Section } from './Section'
import styles from "../styles/Ubicacion.module.css"


export const Ubicacion = () => {
   return (
      <>
         <Section className={`${styles.ubicacion} py-24`}>
            <div className="container mx-auto">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-10">
                  <div className='uppercase font-bold  text-center z-10'>
                     <h2 className='text-azul-oscuro text-[2.8rem] leading-none tracking-tight mb-2'>
                        Para un asesoramiento más
                     </h2>
                     <p className="text-azul-claro text-[2.7rem] leading-none  tracking-tight">Personalizado, visítanos en:</p>

                  </div>
               </div>

               <div className="flex items-center justify-center mb-10">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3">
                     <div className='font-bold text-center'>
                        <p className='text-azul-oscuro text-3xl'>
                           Calle Almirante Guisse N°243 
                        </p>
                        <p className='text-azul-oscuro text-3xl'>Urb. Santa Victoria, Chiclayo</p>
                     </div>
                  </div>
               </div>

               <div className="flex items-center justify-center mb-10">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2">
                     <div className='relative'>
                        <p className='text-azul-oscuro font-bold'>
                           Dale <span className='font-bold'>"clic"</span> a la imagen para conocer nuestra ubicación en Google...
                        </p>
                        <div className="absolute right-8 top-7">
                           <figure>
                              <img src="./assets/img/hand.svg" alt="Pulsar" />
                           </figure>

                        </div>
                     </div>
                  </div>
               </div>

               {/* <div className="block basis-0 flex-grow flex-shrink absolute left-0 right-0">
                  <figure className="block">
                     <img src="./assets/img/fachada.png" width="" alt="Ubicación" />
                  </figure>
               </div> */}

            </div>
         </Section>
      </>
   )
}
