
export const getGaleria = async(json) => {
   const url = `/portafolio-virtual/assets/json/${json}.json`;

   const response = await fetch(url)
   const data = await response.json();

   // console.log(data);

   return data;
   
}
