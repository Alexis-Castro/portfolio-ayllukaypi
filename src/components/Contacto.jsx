import { Logos } from "./Logos"
import { Section } from "./Section"

export const Contacto = () => {
   return (
      <>
         <Section className={"min-h-screen flex items-stretch flex-col justify-between py-36 mb-8"}>
            <Logos className={"left-16 -z-10"} />

            <div className="grow shrink-0">
               <div className="container mx-auto">
                  <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-20">
                     <div className='font-bold text-azul-oscuro'>
                        <p className='text-2xl'>
                           <span className='inline-block mr-2'>
                              <img src={"./assets/img/triangulo.svg"} width="7" alt="triangulo" />
                           </span>
                           Contacta a tu asesor Ayllu Kaypi para que te indique los pasos a seguir, para una buena inversión inmobiliaria.
                        </p>
                     </div>
                  </div>

                  <div className="flex items-center justify-center mb-10">
                     <div className="p-2 block basis-0 flex-grow flex-shrink">
                        <figure className="block relative">
                           <picture>
                              <img src="./assets/img/logo-cyan-3.png" width="100%" alt="Logo Proyecto" />
                           </picture>
                        </figure>
                     </div>

                     <div className="p-2 block basis-0 flex-grow flex-shrink">
                        <figure className="block relative">
                           <img src="./assets/img/logo-cyan-3.png" width="100%" alt="Logo Proyecto" />
                        </figure>
                     </div>
                  </div>

                  <div className="flex items-center justify-center mb-5">
                     <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-4/5 font-roboto">
                        <div className="">
                           <div className="p-3 text-center bg-azul-oscuro font-bold">
                              <p className="uppercase text-white text-xl">
                                 Nuestros N° de cuentas bancarias
                              </p>
                           </div>
                           <div className="p-3 text-justify font-bold border border-azul-claro flex items-center justify-between">
                              <div>
                                 <figure>
                                    <img src="./assets/img/logo-cyan-3.png" width="160" alt="" />
                                 </figure>
                              </div>
                              <div className="text-azul-oscuro">
                                 <p>0011-0285-0100173124</p>
                                 <p>011-0285-000100173124-47</p>
                              </div>
                           </div>
                           <div className="p-3 font-bold border border-x-azul-claro flex items-center justify-between">
                              <div>
                                 <figure>
                                    <img src="./assets/img/logo-cyan-3.png" width="160" alt="" />
                                 </figure>
                              </div>
                              <div className="text-azul-oscuro">
                                 <p>700-3003137516</p>
                                 <p>003-700-00300313751622</p>
                              </div>
                           </div>
                           <div className="p-3 font-bold border border-azul-claro flex items-center justify-between">
                              <div>
                                 <figure>
                                    <img src="./assets/img/logo-cyan-3.png" width="160" alt="" />
                                 </figure>
                              </div>
                              <div className="text-azul-oscuro">
                                 <p>305-9841437060</p>
                                 <p>00230500984143706015</p>
                              </div>
                           </div>
                           <div className="py-3 px-10 font-bold border border-azul-claro bg-azul-claro">
                              <div className="flex text-sm items-center justify-between">
                                 <p className="text-azul-oscuro">
                                    Razón Social: AK Inversiones y Servicios S.A.C 
                                 </p>
                                 <p className="text-azul-oscuro">
                                    Ruc: 20607314684
                                 </p>

                              </div>
                           </div>
                        </div>

                     </div>

                  </div>
                  <div className="flex items-center justify-center ">
                     <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none w-4/5">
                        <p className='text-right text-lg'>
                           <span className='inline-block mr-2'>
                              <img src={"./assets/img/triangulo.svg"} width="7" alt="triangulo" />
                           </span>
                           Aquí hogar, aquí familia.
                        </p>
                     </div>
                  </div>


               </div>

            </div>

         </Section>
      </>
   )
}
