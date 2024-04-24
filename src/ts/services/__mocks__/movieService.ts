import { IMovie } from "../../models/Movie"

export const movies: IMovie[] = [
        {
          Title: "MockadFilm 1",
          imdbID: "4321",
          Type: "Film",
          Poster: "Img",
          Year: "2022",
        },
        {
          Title: "MockadFilm 2",
          imdbID: "8765",
          Type: "Film",
          Poster: "Img",
          Year: "2023",
        },
      ]

      export const getData = async (searchText: string): Promise<IMovie[]> => {
        return new Promise((resolve,reject) => {
            if(searchText===""){
                reject("Sökfältet får inte vara tomt")
            } else {
          resolve(movies)
            }
            })
        }