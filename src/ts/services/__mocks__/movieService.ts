import { IMovie } from "../../models/Movie"



export const movies: IMovie[] = [
        {
          Title: "Harry Potter",
          imdbID: "4321",
          Type: "Film",
          Poster: "Img",
          Year: "2022",
        },
        {
          Title: "Star Wars",
          imdbID: "8765",
          Type: "Film",
          Poster: "Img",
          Year: "2023",
        },
      ]

      export const getData = jest.fn().mockReturnValueOnce(
       async (searchText:string): Promise<IMovie[]> => {
       if(searchText){}
        return new Promise((resolve) => {
        
          resolve(movies)
        })
      })
      .mockReturnValueOnce([])