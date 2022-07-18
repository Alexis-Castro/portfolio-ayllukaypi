// import { useEffect } from 'react'
// import { getGaleria } from '../helpers/getGaleria'

export const ItemGaleria = ({ nombreArchivo, width, height, alt }) => {

   return (
      <>

         <div className='p-2 block basis-0 flex-grow flex-shrink md:flex-none first:col-span-2'>
            <figure className="block relative">
               <a
                  href={`./assets/img/${nombreArchivo}.webp`}
                  className="block spotlight"
               >
                  <picture>
                     <source
                        srcSet={`./assets/img/${nombreArchivo}.avif`}
                        type='image/avif'
                     />
                     <source
                        srcSet={`./assets/img/${nombreArchivo}.webp`}
                        type='image/webp'
                     />
                     <img
                        src={`./assets/img/${nombreArchivo}.png`}
                        width={width}
                        height={height}
                        alt={alt}
                     />
                  </picture>

               </a>
            </figure>
         </div>
      </>
   )
}
