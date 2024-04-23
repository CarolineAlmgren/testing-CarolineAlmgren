
import { getData } from "../ts/services/movieService";
import { IMovie } from "../ts/models/Movie";


export const getMovies = async (searchText: string):Promise<IMovie[]> => {
    //return new Promise(async()=> {
       const movieData= await getData(searchText) 
       return movieData;
        
    
}


