import { Section } from './Section'

export const Ubicacion = () => {
   return (
      <>
         <Section className={"min-h-screen bg-cyan-100"}>
            <div className="container mx-auto">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-16">
                  <div className='uppercase font-bold  text-center'>
                     <h2 className='text-azul-oscuro text-[2.8rem] leading-none'>
                        Para un asesoramiento más
                     </h2>
                     <p className="text-azul-claro text-[2.7rem] leading-none">Personalizado, visítanos en:</p>

                  </div>
               </div>

               <div className="flex items-center justify-center mb-24">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3">
                     <div className='font-bold text-center'>
                        <p className='text-azul-oscuro text-3xl'>
                           Calle Almirante Guisse N°243 
                        </p>
                        <p className='text-azul-oscuro text-3xl'>Urb. Santa Victoria, Chiclayo</p>
                     </div>
                  </div>
               </div>

               <div className="flex items-center justify-center mb-24">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2">
                     <div className='relative'>
                        <p className='text-azul-oscuro font-medium'>
                           Dale <span className='font-bold'>"clic"</span> a la imagen para conocer nuestra ubicación en Google...
                        </p>
                        <div className="absolute right-8 top-7">
                           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-11 h-11 text-azul-claro" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 0 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.867 1.867 0 0 1 2.28.28L8 13M5 3L4 2m0 5H3m11-4l1-1m0 4h1" /></g></svg>

                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </Section>
      </>
   )
}
