import { Logos } from "./Logos"
import { Section } from "./Section"
import styles from "../styles/Premio.module.css"


export const Premio = () => {
   return (
      <>
         <Section className={`${styles.premio} min-h-screen flex items-stretch flex-col justify-between mb-8`}>
            <Logos className={"left-16"} />

            <div className="container mx-auto z-10">
               <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
                  <div className=' text-azul-oscuro z-30'>
                     <h2 className='text-5xl uppercase font-black mb-2'>
                        Reconocimientos en el mundo empresarial.
                     </h2>
                     <p className="font-bold">
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
                     <figure className="block relative ml-8">
                        <img
                           src={`./assets/img/logo-gris-2.png`}
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
