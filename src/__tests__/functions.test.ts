import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";


describe("movieSort function", ()=> {
    test("it should sort movies ", ()=> {
      const unsortedMovies:IMovie[] = [{
        Title: "Harry Potter",imdbID: "1234",Type: "Film",Poster: "img",Year: "2022",
      },
      {
        Title: "Star Wars",imdbID: "8765",Type: "Film",Poster: "Img",Year: "2023",
      }
    ]
      const desc: boolean = false
      
      const sortedMovies = movieSort(unsortedMovies, desc)
      expect(sortedMovies[0].Title).toBe("Star Wars")
      expect(sortedMovies[1].Title).toBe("Harry Potter")
    })
    test("should sort movies in ascending order by default", () => {
      const unsortedMovies = [{
        Title: "Harry Potter", imdbID: "4321",Type: "Film",Poster: "Img",Year: "2022",
      },
      {
        Title: "Star Wars",imdbID: "8765",Type: "Film",Poster: "Img",Year: "2023",
      }]
 
    const asc:boolean = true;
    const sortedMovies = movieSort(unsortedMovies, asc);

    expect(sortedMovies[0].Title).toBe("Harry Potter");
    expect(sortedMovies[1].Title).toBe("Star Wars");
  })
 // ser om testet retunerar en tom lista om inga filmer finns att sortera
  test("It should return an empty array when given an empty array", ()=>{
    const emptyMovies: IMovie[] = []
    const sortedMovies = movieSort(emptyMovies)

    expect(sortedMovies).toEqual([])
  })

// Testar en film som inte råkar innehålla en bild
 test("It should include movies without a title in the sorted list ", () => {
  const movies: IMovie[] = [
      { Title: "Harry Potter", imdbID: "4321", Type: "Film", Poster: "Img", Year: "2022" },
      { Title: "Star Wars", imdbID: "8765", Type: "Film", Poster: "Img", Year: "2023" },
      { Title:"Carolines Film",imdbID: "5678", Type: "Film", Poster: "", Year: "2023" }, 
    ];
  
    // Förväntar oss att det inte blir något fel ändå när vi sorterar filmerna
    expect(() => movieSort(movies)).not.toThrow();

    // Förväntar oss att resultatlistan är densamma som ingångslistan
    expect(movieSort(movies)).toEqual(movies);
});
})