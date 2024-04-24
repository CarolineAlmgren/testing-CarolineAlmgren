import { getData } from "../ts/services/__mocks__/movieService";

describe("getMovie function", ()=>{
    test("should return an array of movies when searchText is provided", async ()=> {
        const searchText = "test"
        const result = await getData(searchText)

        expect(result.length).toBeGreaterThan(0)
        expect(searchText).toBe("test")
        expect(Array.isArray(result)).toBe(true)
        expect(result[0].Title).toBe("MockadFilm 1")
    });
})