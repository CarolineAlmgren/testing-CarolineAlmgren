import { getMovies } from "../__mocks__/movieService";

describe("getMovies mocked function", ()=>{
    test("should return an array of movies when searchText is provided", async ()=> {
        const searchText = "test"
        const result = await getMovies(searchText)

        expect(result.length).toBeGreaterThan(0)
        expect(searchText).toBe("test")
        expect(Array.isArray(result)).toBe(true)
    });
})