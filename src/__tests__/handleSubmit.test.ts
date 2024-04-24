import { IMovie } from "../ts/models/Movie";
import * as  service from "../ts/services/movieService";
import { handleSubmit } from "../ts/handleSubmit";

jest.mock("./../ts/services/movieService.ts");

describe("Test handleSubmit", () => {
    let mockedgetData: jest.SpyInstance<Promise<IMovie[]>>
    

    beforeEach(() => {
        mockedgetData = jest.spyOn(service, "getData");
        

        document.body.innerHTML = 
      `<input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
     </form>
     <div id="movie-container"></div>`;

    })

 test("It sould test handleSubmit function", async ()=> {
   
    await handleSubmit();
    expect(mockedgetData).toHaveBeenCalled();
    const movieContainer = document.getElementById("movie-container")
    expect(movieContainer?.innerHTML).toContain("Namn")
    expect(movieContainer?.innerHTML).toContain("Namn 2")

 })

})