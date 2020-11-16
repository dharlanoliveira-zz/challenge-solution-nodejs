import {isFloat} from "./validation.mjs"

describe("testing rules method isFloat", function() {

    it("isFloat shouldn't return message when the field is float", function() {
        let data = {
            a: 1.01
        }

        let result = isFloat(['a'])(data)

        expect(result).toHaveSize(0)
    })

    it("isFloat should return message when the field is integer", function() {
        let data = {
            a: 1
        }

        let result = isFloat(['a'])(data)

        expect(result).toHaveSize(1)
        expect(result[0]).toBe("Parameter 'a' should be a float")
    })

    it("isFloat should return message when the field is boolean", function() {
        let data = {
            a: true
        }

        let result = isFloat(['a'])(data)

        expect(result).toHaveSize(1)
    })

    it("isFloat should return message when the field is string", function() {
        let data = {
            a: "xxx"
        }

        let result = isFloat(['a'])(data)

        expect(result).toHaveSize(1)
    })

    it("isFloat shouldn't return message when two fields are int", function() {
        let data = {
            a: 1.01,
            b: 2.22
        }

        let result = isFloat(['a','b'])(data)

        expect(result).toHaveSize(0)
    })


})

