import { IMovie } from "../ts/models/Movie";
import * as movieApp from "./../ts/movieApp"
import * as  service from "../ts/services/movieService";


jest.mock("./../ts/services/movieService.ts");

describe("Test handleSubmit", () => {
    let mockedgetData: jest.SpyInstance<Promise<IMovie[]>>
    let mockedHandlesubmit: jest.SpyInstance<Promise<void>>

    beforeEach(() => {
        mockedgetData = jest.spyOn(service, "getData");
        mockedHandlesubmit = jest.spyOn(movieApp, "handleSubmit");

        document.body.innerHTML = 
      `<input type="text" id="searchText" placeholder="Skriv titel här" />
      <button type="submit" id="search">Sök</button>
     </form>
     <div id="movie-container"></div>`
      });
    
    
 test("It sould test handleSubmit function", async ()=> {
    await movieApp.handleSubmit();
    expect(mockedgetData).toHaveBeenCalled();
    expect(mockedHandlesubmit).toHaveBeenCalled();
 })
})