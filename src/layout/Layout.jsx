import { Logos } from '../components/Logos'
import { Nosotros } from '../components/Nosotros'
import { Proyectos } from '../components/Proyectos'
import { Section } from '../components/Section'
import styles from '../styles/Header.module.css'

export const Layout = () => {
   return (
      <>
         <Section className={`${styles.header} bg-azul-oscuro min-h-screen`}>
            <Logos className={"right-12 grayscale"} />
            <div className="container mx-auto">
               <div className='flex flex-col justify-between h-[calc(100vh-7rem)]'>
                  <div className='flex items-center justify-center'>
                     <div className=''>
                        <picture>
                           <img src={"/assets/img/ayllu-kaypi.png"} width="200" alt="logo" />
                           <figcaption className="text-white font-bold text-center text-6xl">
                              Ayllu <br /> Kaypi
                           </figcaption>
                        </picture>
                     </div>
                     <div className="w-1/3"></div>
                  </div>

                  <div className="flex justify-between items-center text-white">
                     <div className="block basis-0 flex-grow flex-shrink md:flex-none p-2">
                        <div className='mb-5'>
                           <h2 className='uppercase text-7xl font-bold'>Un vistazo {""}
                           </h2>
                           <span className="text-4xl uppercase font-bold">a nuestro trabajo</span>

                        </div>
                        <p className="font-medium">
                           <span className='inline-block mr-2'>
                              <img src={"/assets/img/triangulo.svg"} width="7" alt="" />
                           </span>
                           Aquí hogar, aquí familia.
                        </p>
                     </div>
                     <div className="block basis-0 flex-grow flex-shrink md:flex-none -rotate-90 z-50 p-2">

                        <h2 className='uppercase text-6xl font-bold'>
                           2022
                        </h2>
                     </div>
                  </div>

               </div>

            </div>
         </Section>

         <Nosotros />

         <Proyectos />

         {/* <Section className={"bg-slate-400"}>
            <div className="container mx-auto">
               
            </div>
         </Section> */}

      </>
   )
}
