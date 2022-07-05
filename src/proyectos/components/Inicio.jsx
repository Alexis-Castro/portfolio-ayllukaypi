import { Logos } from '../../components/Logos';
import { Section } from '../../components/Section';

export const Inicio = () => {
   return (
      <Section className={`min-h-screen`}>
         <Logos className={"left-12 grayscale -z-10"} />
         <div className="container mx-auto">
            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
               <h2 className='uppercase text-6xl font-bold text-azul-oscuro text-center'>
                  <span className='inline-block mr-2'>
                     <img src={"../src/assets/img/triangulo.svg"} width="30" alt="" />
                  </span>
                  Villa los Parques
                  <p className="text-4xl uppercase font-bold">El paraíso verde que mereces</p>
               </h2>

            </div>

            <div className="">
               <div className="block basis-0 flex-shrink flex-grow text-center mb-8 lg:mb-0">

               </div>
            </div>
         </div>
      </Section>
   )
}
