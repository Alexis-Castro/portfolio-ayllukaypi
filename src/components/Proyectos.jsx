import { Section } from "./Section"
import styles from "../styles/Proyectos.module.css"
import { Logos } from "./Logos"
import { ProyectoItem } from "./ProyectoItem"
import { Corte } from "./Corte"

export const Proyectos = () => {
   return (
      <>
         <div className='relative min-h-screen pb-24'>
            <Logos className={"left-16 bg-logo-cyan"} />

            <Section className={`${styles.proyectos} pb-24`}>
               <div className="container mx-auto">
                  <div className="flex flex-col justify-between">
                     <div className="flex items-center justify-center">
                        <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                           <h2 className='uppercase text-8xl font-bold text-white'>
                              <span className='inline-block mr-2'>
                                 <img src={"./assets/img/triangulo.svg"} width="30" alt="" />
                              </span>
                              Un vistazo
                              <p className="text-5xl uppercase font-bold">a nuestros proyectos</p>
                           </h2>

                        </div>

                     </div>

                  </div>

               </div>
            </Section>

            <Section className={"pt-10"}>
               <div className="container mx-auto">
                  <div className="grid grid-cols-2 gap-8 mb-10 items-baseline">
                     {/* Proyecto-item */}
                     <ProyectoItem
                        fileLogo={"villa-parques-logo"}
                        nombreImg={"villa-parques-3d"}
                        texto={'Un proyecto ideal para tu casa de campo, rodeado de áreas verdes, considerada el "último bastión moche".'}
                        ruta={"/villa-los-parques"}
                        alt={'Villa Los Parques'}
                        className={'mb-10 p-3'}
                     />

                     <ProyectoItem
                        fileLogo={"villa-ramsa-logo"}
                        nombreImg={"ramsa-1"}
                        texto={'Un proyecto ubicado en una zona de gran expansión inmobiliaria, con cercanía a la histórica playa Naylamp'}
                        ruta={"/villa-ramsa"}
                        alt={'Villa Ramsa'}
                        className={'p-4'}
                     />
                  </div>
                  
                  <div className="flex justify-center">
                     <div className="w-1/2 relative">
                        <p className="text-azul-oscuro font-semibold">Dale clic a cualquiera de nuestros proyectos para saber más...</p>
                        <div className="absolute right-8 top-7">
                           <figure>
                              <img src="./assets/img/hand.svg" alt="Pulsa" />
                           </figure>

                        </div>

                     </div>
                  </div>
               </div>
            </Section>

            <Corte className={"mb-6"}/>
         </div>

      </>
   )
}
