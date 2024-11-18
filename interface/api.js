import { key } from "./resources";

export const fetchFoods = async (query) => {
    const url = 'https://api.calorieninjas.com/v1/nutrition?query=' + query;
    
    return await fetch(url, {
        headers: {
            'X-Api-Key': key
        },
        contentType: 'application/json'        
    }).then(res => res.json());
}