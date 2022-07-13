import { Logos } from '../../components/Logos';
import { Section } from '../../components/Section';
import styles from '../../styles/Header.module.css';

export const Portada = ({ proyecto }) => {
   return (
      <Section className={`${styles.header} bg-azul-oscuro min-h-screen`}>
         <Logos className={"right-12 grayscale"} />
         <div className="container mx-auto">
            <div className="flex flex-col justify-between h-[calc(100vh-7rem)]">

               <div className="text-azul-oscuro">
                  <div className="block basis-0 flex-grow flex-shrink md:flex-none p-2">
                     <div className='mb-5'>
                        <h2 className='uppercase text-7xl font-bold'>
                           <span className='inline-block mr-2'>
                              <img src={"/assets/img/triangulo.svg"} width="25" alt="" />
                           </span>
                           Un vistazo
                        </h2>
                        <p className="text-4xl uppercase font-bold">
                           a {proyecto}
                        </p>
                     </div>
                  </div>
                  
               </div>

               <div className="flex justify-between items-center">
                  <div className="block basis-0 flex-grow flex-shrink md:flex-none p-2">
                     <p className='text-white'>
                        <span className='inline-block mr-2'>
                           <img src={"/assets/img/triangulo.svg"} width="7" alt="" />
                        </span>
                        Aquí hogar, Aquí familia
                     </p>
                  </div>

                  <div className="block basis-0 flex-grow flex-shrink md:flex-none p-2">
                     <figure className='block z-20'>
                        <picture>
                           <img src={"..//assets/img/logo-gris-2.png"} width="120" alt="logo" />
                        </picture>
                     </figure>
                  </div>
               </div>

            </div>
         </div>
      </Section>
   )
}
