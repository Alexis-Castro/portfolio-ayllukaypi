import { Logos } from './Logos'
import { Section } from './Section'

export const Legal = () => {
   return (
      <>
         <Section className={`min-h-screen bg-slate-50`}>
            <Logos className={"left-[42%] "} />

            <div className="container mx-auto relative">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-24 mt-20">
                  <div className='uppercase font-bold text-azul-oscuro text-center'>
                     <h2 className='text-7xl  tracking-tight'>
                        Para formalizar
                     </h2>
                     <p className="text-5xl  tracking-tight">Legalmente tu inversión</p>

                  </div>

               </div>

               <div className="flex items-center justify-center mb-24">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/12">
                     <figure className="block relative">
                        <picture>
                           {/* <source
                                 srcSet={`./assets/img/logo-azul-2.avif`}
                                 type='image/avif'
                              />
                              <source
                                 srcSet={`./assets/img/logo-azul-2.webp`}
                                 type='image/webp'
                              /> */}
                           <img
                              src={`./assets/img/logo-azul-2.png`}
                              width="100%"
                              // height="80"
                              alt="Ubicación del proyecto"
                           />
                        </picture>
                     </figure>
                  </div>

               </div>

               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-48">
                  <div className='uppercase font-bold text-azul-oscuro text-center'>
                     <h2 className='text-5xl'>
                        Te otorgamos...
                     </h2>
                  </div>
               </div>

               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none ">
                  <div className='font-medium text-azul-oscuro text-center'>
                     <p className="font-medium">
                        <span className='inline-block mr-2'>
                           <img src={"./assets/img/triangulo.svg"} width="7" alt="triangulo" />
                        </span>
                        Aquí hogar, aquí familia.
                     </p>
                  </div>
               </div>


            </div>
         </Section>
      </>
   )
}
