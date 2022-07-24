import { Logos } from '../../components/Logos'
import { Section } from '../../components/Section'
import { ListItem } from './ListItem'

export const Caracteristicas = ({ proyecto, archivoMapa, urlUbicacion, features }) => {

   return (
      <Section className={"min-h-screen mb-8"}>
         <Logos className={"left-16 -z-10 bg-logo-cyan"} />

         <div className="container mx-auto">
            <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-12">
               <div className="flex items-center justify-between uppercase  font-bold">
                  <p className='text-azul-claro -rotate-90 -ml-8 text-5xl'>Este</p>
                  <p className='text-azul-oscuro -ml-6 text-6xl'>Proyecto cuenta con:</p>
                  <figure>
                     <img src={"./assets/img/logo-azul-2.png"} width="125" alt="" />
                  </figure>
               </div>

            </div>

            <div className="lg:grid lg:grid-cols-2 mb-8">
               <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none mb-8'>
                  <div className="">
                     <ul className='mb-5'>
                        {
                           features.map((feature, key) => {
                              return (
                                 <ListItem key={key} description={feature} />
                              )
                           })
                        }
                     </ul>
                  </div>
               </div>

               <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
                  <a 
                     href={urlUbicacion} 
                     className='block'
                     target={'_blank'}
                     rel={'noopener noreferrer'}

                  >
                     <figure className="block relative">
                        <picture>
                           <source 
                              srcSet={`./assets/img/${archivoMapa}.avif`} 
                              type='image/avif'
                           />
                           <source 
                              srcSet={`./assets/img/${archivoMapa}.webp`} 
                              type='image/webp'
                           />
                           <img 
                              src={`./assets/img/${archivoMapa}.png`} 
                              width="100%" 
                              className='border-2' 
                              alt="Ubicación del proyecto" 
                           />
                        </picture>
                     </figure>

                  </a>
               </div>

            </div>

            <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none'>
               <div className="flex items-center justify-center">
                  <div className="w-1/2 text-azul-oscuro">
                     <p className=''>Dale <span className='font-bold'>clic</span> a la imagen para conocer la ubicación exacta del proyecto...</p>
                     <p className=''>También puedes buscar el proyecto como <span className='font-bold'>{proyecto}</span></p>

                  </div>

               </div>
            </div>

         </div>
      </Section>
   )
}
