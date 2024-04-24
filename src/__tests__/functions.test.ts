import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("test movieSort", ()=> {
    test("it should sort movies ", ()=> {
       movieSort([]);

      const movies:IMovie[] = [{
        Title: "Namn",
        imdbID: "1234",
        Type: "Film",
        Poster: "img",
        Year: "1989",
      },
      {
        Title: "Namn2",
        imdbID: "5678",
        Type: "Film",
        Poster: "img",
        Year: "1990",
      }
    ]
      const desc: boolean = true
      
      movieSort(movies, desc)
      expect(movies[0].Title).toBe("Namn")
      expect(movies[1].Title).toBe("Namn2")
    })
})