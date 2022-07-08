import { Logos } from '../../components/Logos'
import { Section } from '../../components/Section'

export const Caracteristicas = () => {
   return (
      <Section className={"min-h-screen"}>
         <Logos className={"left-12 grayscale -z-10"} />

         <div className="container mx-auto">
            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-12">
               <div className="flex items-center justify-center uppercase  font-bold">
                  <p className='text-azul-claro -rotate-90 text-5xl'>Este</p>
                  <p className='text-azul-oscuro -m-8 text-6xl'>Proyecto cuenta con:</p>
                  <figure>
                     <img src={"../../src/assets/img/logo-azul-2.png"} width="125" alt="" />
                  </figure>
               </div>

            </div>
         </div>
      </Section>
   )
}
