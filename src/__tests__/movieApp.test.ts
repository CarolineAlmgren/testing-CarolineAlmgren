
//import { IMovie } from "../ts/models/Movie";
//import { getData } from "../ts/services/movieService";
import * as movieApp from "./../ts/movieApp";

jest.mock("./../ts/services/movieService.ts");

describe("testing init", () => {
  let mockedCreateHtml: jest.SpyInstance<void>;
  beforeEach(() => {
    mockedCreateHtml = jest.spyOn(movieApp, "createHtml");
  
  })

  test("it should call function handleSubmit", async() => {
     
      document.body.innerHTML = `
      <div id="app">
      <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>
    </div>
      `;
    
      movieApp.handleSubmit();

      expect(mockedCreateHtml).toHaveBeenCalled();
    
  })
  })



