
export const Fotos360 = ({ src }) => {
   return (
      <div className="p-2 block basis-0 flex-grow flex-shrink md:flex-none">
         <figure className='block relative'>
            <picture>
               <img src={src} width="100%" alt="" />

            </picture>
         </figure>
      </div>
   )
}
