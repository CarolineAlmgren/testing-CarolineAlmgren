import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("movieSort function", ()=> {
    test("it should sort movies ", ()=> {
      const unsortedMovies:IMovie[] = [{
        Title: "Namn",imdbID: "1234",Type: "Film",Poster: "img",Year: "1989",
      },
      {
        Title: "Namn2",imdbID: "5678",Type: "Film",Poster: "img",Year: "1990",
      }
    ]
      const desc: boolean = false
      
      const sortedMovies = movieSort(unsortedMovies, desc)
      expect(sortedMovies[0].Title).toBe("Namn2")
      expect(sortedMovies[1].Title).toBe("Namn")
    })
    test("should sort movies in ascending order by default", () => {
      const unsortedMovies = [{
        Title: "Namn", imdbID: "1234",Type: "Film",Poster: "img",Year: "1989",
      },
      {
        Title: "Namn2",imdbID: "5678",Type: "Film",Poster: "img",Year: "1990",
      }]
 
    const asc:boolean = true;
    const sortedMovies = movieSort(unsortedMovies, asc);

    expect(sortedMovies[0].Title).toBe("Namn");
    expect(sortedMovies[1].Title).toBe("Namn2");
  })
    });