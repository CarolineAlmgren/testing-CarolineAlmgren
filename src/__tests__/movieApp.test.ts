
//import { IMovie } from "../ts/models/Movie";
//import { getData } from "../ts/services/movieService";

import * as movieApp from "./../ts/movieApp";

jest.mock("./../ts/services/movieService.ts");

describe("testing init", () => {
  let mockedInit: jest.SpyInstance<Promise<void>>

  beforeEach(() => {
    mockedInit = jest.spyOn(movieApp, "init")
  })
    
    test("It should call init function", () =>{
      const form = document.createElement("form")
      form.id="searchForm"
      document.body.appendChild(form)
      movieApp.init()
      expect(mockedInit).toHaveBeenCalled();
      })
    })

    describe("test createHtml", ()=> {
      let mockedCreateHtml: jest.SpyInstance<void>
    

    beforeEach(() => {
     mockedCreateHtml = jest.spyOn(movieApp, "createHtml")
    })
    test("It should create HTML", ()=> {
      
      const movies = [
        {
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
      const container = document.createElement("div")
      container.id="movie-container"

      movieApp.createHtml(movies, container)
      expect(mockedCreateHtml).toHaveBeenCalled()
      expect(movies[1].imdbID).toBe("5678")
    })
  })


