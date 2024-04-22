//import { getData } from "../ts/services/movieService";
import { IMovie } from "../ts/models/Movie";



export const getMovies = async (searchText: string):Promise<IMovie[]> => {
    return new Promise(async(resolve,reject)=> {
        const movieData = await getMovies(searchText)
        resolve([
        {
            Title: "Namn3",
            imdbID: "0112",
            Type: "Film",
            Poster: "Img",
            Year: "1991"
        },
        {
            Title: "Namn4",
            imdbID: "7899",
            Type: "Film",
            Poster: "Img",
            Year: "1992"

        },
    ])

        return movieData
        
    
})
}
