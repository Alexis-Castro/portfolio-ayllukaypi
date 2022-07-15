import { Logos } from "./Logos"
import { Section } from "./Section"

export const InversionRentabilidad = () => {
   return (
      <>
         <Section className={`min-h-screen flex items-stretch flex-col justify-between `}>
            <Logos className={"left-12 -z-10"} />

            <div className="container mx-auto z-10">
               <div className="flex justify-end">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3">
                     <div className='font-bold text-azul-oscuro text-right'>
                        <h2 className='text-4xl uppercase mb-2'>
                           Recuerda que a mayor número de lotes adquiridos, mayor será tu rentabilidad.
                        </h2>
                        <p className="font-medium">
                           <span className='inline-block mr-2'>
                              <img src={"/assets/img/triangulo.svg"} width="7" alt="triangulo" />
                           </span>
                           Aquí hogar, aquí familia.
                        </p>
                     </div>
                  </div>

               </div>
            </div>

            <div className="container mx-auto">
               <div className="p-2 flex justify-end z-10">
                  <div className="flex items-center justify-between">
                     <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                        <figure className="block relative">
                           <picture>
                              <img src="/assets/img/logo-gris-2.png" width="150" alt="" />
                           </picture>
                        </figure>
                     </div>

                  </div>
               </div>
            </div>
         </Section>

         <Section className={"min-h-screen bg-azul-oscuro py-20 flex items-stretch flex-col justify-between"}>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2 mb-36">
               <div className="container mx-auto">
                  <div className='font-bold'>
                     <h2 className='text-8xl uppercase text-azul-claro mb-10'>
                        Y tú...
                     </h2>
                     <h3 className="text-4xl text-white">
                        ¿Quieres invertir y hacer crecer tu dinero sin riesgo?
                     </h3>
                  </div>
               </div>

            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2">
               <div className="container mx-auto">
                  <div className="font-bold mb-14">
                     <h3 className="text-3xl text-white">
                        No lo pienses más e invierte con nosotros
                     </h3>
                  </div>

                  <p className="font-medium text-white mb-10">
                     <span className='inline-block mr-2'>
                        <img src={"/assets/img/triangulo.svg"} width="7" alt="triangulo" />
                     </span>
                     Aquí hogar, aquí familia.
                  </p>

               </div>
            </div>

            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2">
               <div className="container mx-auto">

                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3'>
                     <figure className="block relative">
                        <picture>
                           <img src="/assets/img/logo-gris-2.png" alt="" />
                        </picture>
                     </figure>
                  </div>

               </div>
            </div>
         </Section>
      </>
   )
}
