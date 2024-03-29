import { Section } from './Section'
import styles from "../styles/Documentos.module.css"


export const Documentos = () => {
   return (
      <>
         <Section className={`${styles.documentos} min-h-screen flex items-stretch flex-col justify-between`}>

            <div className="container mx-auto z-10">
               <div className='flex justify-end '>
                  <div className="flex items-center justify-between">

                     <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                        <picture>
                           <img src={"./assets/img/logo-azul-2.png"} width="80" alt="logo" />
                        </picture>
                     </div>

                  </div>
               </div>
            </div>

            <div className="w-5/6 mx-auto z-10 absolute top-[34%]">
               <div className='flex items-center justify-between text-2xl text-center'>
                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none ml-14'>
                     <p className='uppercase text-azul-oscuro font-black font-roboto'>Minuta</p>
                  </div>
                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none ml-5'>
                     <p className='uppercase text-azul-oscuro font-black font-roboto'>Contrato de <br /> Compra/Venta</p>
                  </div>
                  <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none mr-5'>
                     <p className='uppercase text-azul-oscuro font-black font-roboto'>Escritura <br /> Pública</p>
                  </div>
               </div>
            </div>
            {/* 
            <div className="items-center flex shrink-0 z-10">
               <div className="container mx-auto">
                  <div className="flex items-center justify-center font-bold text-azul-oscuro uppercase text-2xl text-center">
                     <div className='p-2 flex flex-col items-center justify-between w-1/3'>
                        <div className='mb-6'>
                           <h3 className="">Escritura <br /> pública</h3>
                        </div>

                        <figure className="block relative">
                           <picture>
                              <img src="./assets/img/escritura.svg" alt="" width="150" />
                           </picture>
                        </figure>
                     </div>

                     <div className='p-2 flex flex-col items-center justify-between w-1/3'>
                        <div className='mb-6'>
                           <h3 >Contrato de compra / venta</h3>
                        </div>

                        <figure className="block relative">
                           <picture>
                              <img src="./assets/img/escritura.svg" width="150" alt="" />
                           </picture>
                        </figure>
                     </div>

                     <div className='p-2 flex flex-col items-center justify-between w-1/3'>
                        <div className='mb-14'>
                           <h3 >Minuta</h3>
                        </div>

                        <figure className="block relative">
                           <picture>
                              <img src="./assets/img/escritura.svg" width="150" alt="" />
                           </picture>
                        </figure>
                     </div>
                  </div>
               </div>
            </div> */}

            <div className="p-2 flex justify-end z-10">
               <div className='flex items-center'>
                  <span className="inline-block mr-1">
                     <img src="./assets/img/triangulo.svg" width="7" alt="triangulo" />
                  </span>
                  <p className="font-medium text-azul-oscuro">Aquí hogar, aquí familia.</p>
               </div>
            </div>
         </Section>
      </>
   )
}
