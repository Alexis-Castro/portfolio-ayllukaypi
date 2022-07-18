import { Logos } from "./Logos"
import { Section } from "./Section"

export const Premio = () => {
   return (
      <>
         <Section className={`min-h-screen flex items-stretch flex-col justify-between bg-slate-50 mb-8`}>
            <Logos className={"left-16"} />

            <div className="container mx-auto z-10">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                  <div className=' text-azul-oscuro z-30'>
                     <h2 className='text-5xl uppercase font-black mb-2'>
                        Reconocimientos en el mundo empresarial.
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
            <div className="container mx-auto z-10">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-1/2">
                  <p className='text-xl font-bold mb-2 text-azul-oscuro'>
                     Por una labor transparente y en beneficio del Perú.
                  </p>
               </div>

            </div>

            <div className="container mx-auto">
               <div className="p-2 flex ">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                     <figure className="block relative ml-4">
                        <img
                           src={`./assets/img/logo-azul-2.png`}
                           width="80"
                           // height="80"
                           alt="Ubicación del proyecto"
                        />
                     </figure>

                  </div>
               </div>

            </div>

         </Section>
      </>
   )
}
