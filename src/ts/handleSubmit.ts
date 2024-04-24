import { getData } from "./services/__mocks__/movieService";
import { createHtml } from "../createHtml";
import { displayNoResult } from "./movieApp";


export async function handleSubmit() {
    let searchText = (document.getElementById("searchText") as HTMLInputElement)
      .value;
  
    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;
    container.innerHTML = "";
  
    try {
     let movies = await getData(searchText);
  
      if (movies.length > 0) {
        createHtml(movies, container);
      } else {
        displayNoResult(container);
      }
    } catch {
      displayNoResult(container);
    }
  }
  