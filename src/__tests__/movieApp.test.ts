
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
      let container = document.createElement("div")
      container.id="movie-container"

      movieApp.createHtml(movies, container)
      expect(mockedCreateHtml).toHaveBeenCalled()
      expect(movies[1].imdbID).toBe("5678")
    })
  })

  describe("test displayNoResult", ()=>{
    let mockedNoResult: jest.SpyInstance<void>

    beforeEach(()=> {
      mockedNoResult = jest.spyOn(movieApp, "displayNoResult")
    })
    test("It should give us a text with inga sökresultat att visa", ()=>{
      let container = document.createElement("div") as HTMLDivElement
      let noMessage = document.createElement("p")
      noMessage.innerHTML = "Inga sökresultat att visa";
      container.appendChild(noMessage);
      
      movieApp.displayNoResult(noMessage)
      expect(mockedNoResult).toHaveBeenCalled();
      expect(noMessage.innerHTML).toContain("Inga sökresultat att visa")

    })
  })

