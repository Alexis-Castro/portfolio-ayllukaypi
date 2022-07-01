import React from 'react'
import { Logos } from '../components/Logos'
import { Section } from '../components/Section'
import styles from '../styles/Header.module.css'

export const Layout = () => {
   return (
      <>
         <Section className={`${styles.header} bg-azul-oscuro h-screen`}>
            <Logos className={"right-12"} />
            <div className="container mx-auto">
               <div className='flex flex-col justify-between h-[calc(100vh-7rem)]'>
                  <div className='flex items-center justify-center'>
                     <div className=''>
                        <picture>
                           <img src={"../src/assets/img/ayllu-kaypi.png"} width="200" alt="logo" />
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
                              <img src={"../src/assets/img/triangulo.svg"} width="7" alt="" />
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

         <Section className={""}>
            <Logos className={"left-12 -z-10"} />

            <div className="container mx-auto">
               <div className='flex flex-col justify-between '>
                  <div className="flex items-center justify-between">
                     <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none w-2/3'>
                        <h2 className='uppercase text-5xl font-bold text-azul-oscuro'>
                           <span className='inline-block mr-1'>
                              <img src={"../src/assets/img/triangulo.svg"} width="16" alt="" />
                           </span>
                           Primero <span className='text-xl'>te contamos</span> ¡quienes somos!
                        </h2>
                     </div>

                  </div>
                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                     <p className='text-xl mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et obcaecati mollitia tenetur non ipsa in libero sed, vitae blanditiis consequatur laborum consectetur quia deleniti officiis explicabo tempora voluptatem aperiam.
                        In deserunt excepturi beatae saepe, corrupti nisi similique quo fugiat optio itaque nam natus, aliquam necessitatibus inventore a. Esse doloremque dicta reiciendis sed temporibus, sunt asperiores expedita aut ad deleniti.
                        
                     </p>
                     <p className='text-xl'>
                        Laboriosam reprehenderit debitis consequatur neque omnis porro aperiam magnam voluptates veritatis saepe et modi, soluta magni numquam maiores architecto nisi delectus placeat, ullam consequuntur iusto quam dolor. In, velit necessitatibus.
                     </p>

                  </div>

               </div>

            </div>

         </Section>

         <Section className={"bg-slate-400"}>
            <div className="container mx-auto">
               
            </div>
         </Section>

      </>
   )
}
