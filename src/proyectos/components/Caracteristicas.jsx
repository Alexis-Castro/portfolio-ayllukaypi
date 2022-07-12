import { Logos } from '../../components/Logos'
import { Section } from '../../components/Section'
import { ListItem } from './ListItem'

export const Caracteristicas = () => {
   return (
      <Section className={"min-h-screen"}>
         <Logos className={"left-16 grayscale -z-10"} />

         <div className="container mx-auto">
            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-12">
               <div className="flex items-center justify-between uppercase  font-bold">
                  <p className='text-azul-claro -rotate-90 -ml-8 text-5xl'>Este</p>
                  <p className='text-azul-oscuro -ml-6 text-6xl'>Proyecto cuenta con:</p>
                  <figure>
                     <img src={"../../src/assets/img/logo-azul-2.png"} width="125" alt="" />
                  </figure>
               </div>

            </div>

            <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
               <div className="">
                  <ul className=''>
                     <ListItem description="285 lotes habilitados para casas en el campo y camino a la playa." />
                     <ListItem description="Lotes desde 90m2 hasta 200m2" />
                     <ListItem description="Servicios de luz (posteado) y Agua (Matriz Troncal) Habilitados en el proyecto." />
                     <ListItem description="Contrato de compra/venta, con minuta y escritura pública." />
                  </ul>
               </div>

               <div>

               </div>
            </div>
         </div>
      </Section>
   )
}
