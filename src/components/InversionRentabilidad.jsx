import { Section } from "./Section"
import styles from "../styles/InversionRenta.module.css"


export const InversionRentabilidad = () => {
   return (
      <>
         <Section className={`${styles.rentabilidad} min-h-screen flex items-stretch flex-col justify-between `}>

            <div className="container mx-auto z-10">
               <div className="flex justify-end">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3">
                     <div className=' text-azul-oscuro text-right'>
                        <h2 className='text-4xl uppercase font-roboto font-black mb-2'>
                           Recuerda que a mayor número de lotes adquiridos, mayor será tu rentabilidad.
                        </h2>
                        <p className="font-medium">
                           <span className='inline-block mr-2'>
                              <img src={"./assets/img/triangulo.svg"} width="7" alt="triangulo" />
                           </span>
                           Aquí hogar, aquí familia.
                        </p>
                     </div>
                  </div>

               </div>
            </div>

            <div className="container mx-auto">
               <div className="flex items-center justify-end">
                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/6 mr-6'>
                     <figure className="block relative">
                        <picture>
                           <img className="" src="./assets/img/logo-gris-2.png" width="80" alt="Ayllu Kaypi" />
                        </picture>
                     </figure>
                  </div>

               </div>
            </div>
         </Section>

         <Section className={`${styles.inversion} min-h-screen bg-azul-oscuro py-20 flex items-stretch flex-col justify-between`}>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2 mb-48">
               <div className="container mx-auto">
                  <div className='font-roboto'>
                     <h2 className='text-8xl uppercase text-azul-claro mb-10 font-black'>
                        Y tú...
                     </h2>
                     <h3 className="text-4xl text-white font-bold">
                        ¿Quieres invertir y hacer crecer tu dinero sin riesgo?
                     </h3>
                  </div>
               </div>

            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2">
               <div className="container mx-auto">
                  <div className="font-bold mb-20">
                     <h3 className="text-3xl text-white font-roboto">
                        No lo pienses más e invierte con nosotros
                     </h3>
                  </div>

                  <p className="font-medium text-white mb-16 ml-10">
                     <span className='inline-block mr-2'>
                        <img src={"./assets/img/triangulo.svg"} width="7" alt="triangulo" />
                     </span>
                     Aquí hogar, aquí familia.
                  </p>

               </div>
            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2">
               <div className="container mx-auto">

                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3 ml-20'>
                     <figure className="block relative">
                        <picture>
                           <img src="./assets/img/logo-gris-2.png" width="100" alt="" />
                        </picture>
                     </figure>
                  </div>

               </div>
            </div>
         </Section>
      </>
   )
}
