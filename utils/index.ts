   /// request to fetch cars from the rapid api that code change to below right

export async function fetchCars(){
     const headers = {
        
            'x-rapidapi-key': 'e770e7d860msh10695df1383c4d7p172f6ajsnd987b55e3645',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
         }

         const response =await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
            headers:headers,
         });

         const result = await response.json();

         return result;
}