import { Section } from "./Section"
import styles from "../styles/Proyectos.module.css"
import { Logos } from "./Logos"
import { ProyectoItem } from "./ProyectoItem"

export const Proyectos = () => {
   return (
      <>
         <div className='relative min-h-screen'>
            <Logos className={"left-12"} />
            <Section className={`${styles.proyectos} pb-24`}>
               <div className="container mx-auto">
                  <div className="flex flex-col justify-between">
                     <div className="flex items-center justify-center">
                        <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                           <h2 className='uppercase text-8xl font-bold text-white'>
                              <span className='inline-block mr-2'>
                                 <img src={"/assets/img/triangulo.svg"} width="30" alt="" />
                              </span>
                              Un vistazo
                              <p className="text-5xl uppercase font-bold">a nuestros proyectos</p>
                           </h2>

                        </div>

                     </div>

                  </div>

               </div>
            </Section>

            <Section>
               <div className="container mx-auto">
                  <div className="grid grid-cols-2 gap-8 mb-10">
                     {/* Proyecto-item */}
                     <ProyectoItem
                        srcLogo={"/assets/img/logo-cyan-3.png"}
                        srcProyecto={"/assets/img/villa-los-parques-5.webp"}
                        texto={'Un proyecto ideal para tu casa de campo, rodeado de áreas verdes, considerada el "último bastión moche".'}
                        ruta={"/villa-los-parques"}
                     />

                     <ProyectoItem
                        srcLogo={"/assets/img/logo-cyan-3.png"}
                        srcProyecto={"/assets/img/villa-los-parques-4.webp"}
                        texto={'Un proyecto ubicado en una zona de gran expansión inmobiliaria, con cercanía a la histórica playa Naylamp'}
                        ruta={"/villa-ramsa"}
                     />
                  </div>
                  <div className="flex justify-center">
                     <div className="w-1/2 relative">
                        <p className="text-azul-oscuro font-semibold">Dale clic a cualquiera de nuestros proyectos para saber más...</p>
                        <div className="absolute right-8 top-7">
                           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-11 h-11 text-azul-claro" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 0 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.867 1.867 0 0 1 2.28.28L8 13M5 3L4 2m0 5H3m11-4l1-1m0 4h1" /></g></svg>

                        </div>

                     </div>
                  </div>
               </div>
            </Section>

         </div>

      </>
   )
}
