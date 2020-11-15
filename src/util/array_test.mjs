import {checkIsArrayStrings, filterNotNull} from "./array.mjs";

describe("testing array utilities methods", function () {

    it("filterNotNull should remove null value from array", function () {
        let array = [1, 2, null]

        let result = filterNotNull(array)

        expect(result).toEqual([1, 2]);
    })

    it("filterNotNull should return empty array when all values null", function () {
        let array = [null, null]

        let result = filterNotNull(array)

        expect(result).toEqual([]);
    })


    it("filterNotNull shouldn't do anything when all values not null", function () {
        let array = [1, 2]

        let result = filterNotNull(array)

        expect(result).toEqual([1, 2]);
    })

    it("checkIsArrayStrings shouldn't raise error when all items are string", function () {
        let array = ["a", "b"]

        expect( () => { checkIsArrayStrings(array) }).not.toThrowError("Input parameters should be a array of strings")
    })

    it("checkIsArrayStrings should raise error when at least one error not string", function () {
        let array = [1, "b"]

        expect( () => { checkIsArrayStrings(array) }).toThrowError("Input parameters should be a array of strings")
    })

    it("checkIsArrayStrings shouldn't raise error when array is empty", function () {
        let array = []

        expect( () => { checkIsArrayStrings(array) }).not.toThrowError("Input parameters should be a array of strings")
    })
})
