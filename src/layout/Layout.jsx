import React from 'react'
import styles from '../styles/Header.module.css'

export const Layout = () => {
   return (
      <>
         <section className={`${styles.header} lg:px-14 lg:py-14 px-11 py-14 bg-azul-oscuro h-screen flex flex-col justify-between`}>
            {/* <div className="flex flex-col justify-between"> */}
               <div className='flex items-center justify-center'>
                  <div className=''>
                     <picture>
                        <img src={"../src/assets/img/ayllu-kaypi.png"} width="230" alt="logo" />
                        <figcaption className="text-white font-bold text-center text-6xl">
                           Ayllu <br /> Kaypi
                        </figcaption>
                     </picture>
                  </div>
                  <div className="w-1/3"></div>
               </div>
               <div className="flex justify-between items-center text-white">
                  <div className="">
                     <h2 className='uppercase text-7xl font-bold mb-5'>Un vistazo {""}
                        <span className="text-5xl">a nuestro trabajo</span>
                     </h2>
                     <p className="font-medium">Aquí hogar, aquí familia.</p>
                  </div>
                  <div className="-rotate-90">
                     <h2 className='uppercase text-6xl font-bold'>
                        2022
                     </h2>
                  </div>
               </div>

            {/* </div> */}
         </section>

         <section className="lg:px-14 lg:py-14 px-11 py-14">

         </section>
      
      </>
   )
}
