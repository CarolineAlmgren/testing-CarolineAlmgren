import { getData } from "../ts/services/movieService";
import * as movieApp from "./../ts/movieApp";

jest.mock("./../ts/services/movieService.ts");

describe("testing init", () => {
  let mockedCreateHtml: jest.SpyInstance<void>;
  beforeEach(() => {
    mockedCreateHtml = jest.spyOn(movieApp, "createHtml");
  })
  test("it should call function handleSubmit", async() => {
      let searchText = "hej";
      const searchTextElement = document.createElement("input")
      searchTextElement.id = "searchText"
      document.body.appendChild(searchTextElement)

      movieApp.handleSubmit();
      await getData(searchText)
      expect(mockedCreateHtml).toHaveBeenCalled();
      
    })
    
  });
 


