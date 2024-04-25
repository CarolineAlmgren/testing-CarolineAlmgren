//import { IMovie } from "../ts/models/Movie";
import * as createHtml from "./../ts/createHtml";
import * as displayNoResult from "./../ts/createHtml";
import { handleSubmit } from "../ts/handleSubmit";

jest.mock("./../ts/services/movieService.ts");

describe("Test handleSubmit", () => {
    let mockedCreateHtml: jest.SpyInstance<void>
    let mockedDisplayNo: jest.SpyInstance<void>
    

    beforeEach(() => {
        mockedCreateHtml = jest.spyOn(createHtml, "createHtml");
        mockedDisplayNo = jest.spyOn(displayNoResult, "createHtml")
        
        document.body.innerHTML = 
        `<form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search">Sök</button>
       </form>
       <div id="movie-container"></div>`;

    })

 test("It sould test handleSubmit function", async ()=> {
    await handleSubmit();
    expect(mockedCreateHtml).toHaveBeenCalled()
    expect(mockedDisplayNo).toHaveBeenCalled()
    

 })

})