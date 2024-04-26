
//import { IMovie } from "../ts/models/Movie";
//import { getData } from "../ts/services/movieService";

import * as movieApp from "./../ts/movieApp";



jest.mock("./../ts/services/movieService.ts");


describe("testing init", () => {
  let mockedInit: jest.SpyInstance<Promise<void>>
 

  beforeEach(() => {
    mockedInit = jest.spyOn(movieApp, "init")
    
  })
    
    test("It should test init function", () =>{

      document.body.innerHTML= `<form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>`
      const form = document.getElementById("searchForm") as HTMLFormElement
      document.body.appendChild(form)
      movieApp.init()

      expect(mockedInit).toHaveBeenCalled();
      })
    })


  describe("test displayNoResult", ()=>{
    let mockedNoResult: jest.SpyInstance<void>

    beforeEach(()=> {
      mockedNoResult = jest.spyOn(movieApp, "displayNoResult")
    })
    test("It should give us a text with: inga sökresultat att visa", ()=>{
      let container = document.createElement("div") as HTMLDivElement
      let noMessage = document.createElement("p")
      noMessage.innerHTML = "Inga sökresultat att visa";
      container.appendChild(noMessage);
      
      movieApp.displayNoResult(noMessage)
      expect(mockedNoResult).toHaveBeenCalled();
      expect(noMessage.innerHTML).toContain("Inga sökresultat att visa")

    })
  })

