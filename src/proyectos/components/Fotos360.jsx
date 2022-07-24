
export const Fotos360 = ({ archivoFoto }) => {
   return (
      <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
         <figure className='block relative'>
            <a
                  href={`./assets/img/${archivoFoto}.webp`}
                  className="block spotlight"
            >
               <picture>
                  <source
                     srcSet={`./assets/img/${archivoFoto}.avif`}
                     type='image/avif'
                  />
                  <source
                     srcSet={`./assets/img/${archivoFoto}.webp`}
                     type='image/webp'
                  />
                  <img
                     src={`./assets/img/${archivoFoto}.png`}
                     width="100%"
                     className='border-2'
                     alt="Ubicación del proyecto"
                  />

               </picture>

            </a>
         </figure>
      </div>
   )
}
