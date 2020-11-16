import {isInt} from "./validation.mjs"

describe("testing rules method isInt", function() {

    it("isInt shouldn't return message when the field is integer", function() {
        let data = {
            a: 1
        }

        let result = isInt(['a'])(data)

    })

    it("isInt should return message when the field is float", function() {
        let data = {
            a: 1.01
        }

        let result = isInt(['a'])(data)

        expect(result).toHaveSize(1)
        expect(result[0]).toBe("Parameter 'a' should be a integer")
    })

    it("isInt should return message when the field is boolean", function() {
        let data = {
            a: true
        }

        let result = isInt(['a'])(data)

        expect(result).toHaveSize(1)
    })

    it("isInt should return message when the field is string", function() {
        let data = {
            a: "xxx"
        }

        let result = isInt(['a'])(data)

        expect(result).toHaveSize(1)
    })

    it("isInt shouldn't return message when two fields are int", function() {
        let data = {
            a: 1,
            b: 2
        }

        let result = isInt(['a','b'])(data)

        expect(result).toHaveSize(0)
    })


})

