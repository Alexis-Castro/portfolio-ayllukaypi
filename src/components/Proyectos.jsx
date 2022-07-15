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
                     <div className="w-1/2">
                        <p className="text-azul-oscuro font-semibold">Dale clic a cualquiera de nuestros proyectos para saber más...</p>

                     </div>
                  </div>
               </div>
            </Section>

         </div>

      </>
   )
}
