import { createHtml } from "../ts/createHtml";
import { movies } from "../ts/services/__mocks__/movieService";

describe("test createHtml", ()=> {
    });
  test("It should test createHtml", ()=> {
  
    document.body.innerHTML = `
    <div id="app">
    <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
  </div>
    `;
    const movieContainer = document.getElementById("movie-container") as HTMLDivElement
    createHtml(movies, movieContainer)
    
    const theMove = movieContainer.querySelectorAll(".movie")
    expect(theMove.length).toBe(2);
    
  })
