import { init, handleSubmit } from "../ts/movieApp";
 
jest.mock("./../services/movieService.ts");

describe("movieApp", () => {
  test("it should render movies", async () => {
    await init();

    const personTags = document.getElementsByClassName("person");

    expect(personTags).toHaveLength(3);
  });
});