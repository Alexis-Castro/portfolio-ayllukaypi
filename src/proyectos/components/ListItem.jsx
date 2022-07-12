
export const ListItem = ({ description }) => {
   return (
      <>
         <li className='flex items-center mb-2'>
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(6 46 81 / 1)" className="mr-2 w-8" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
               </svg>

            </div>
            <p className='text-azul-oscuro text-justify text-2xl'>{description}</p>

         </li>
      </>
   )
}
