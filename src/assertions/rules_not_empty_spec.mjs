import {isNotEmpty} from "./rules.mjs"

describe("testing rules method isNotEmpty", function() {

    it("isNotEmpty shouldn't return message when one field not empty", function() {
        let data = {
            a: "v1"
        }

        let result = isNotEmpty(['a'])(data)

        expect(result).toHaveSize(0)
    })

    it("isNotEmpty shouldn't return message when multiples fields not empty", function() {
        let data = {
            a: "v1",
            b: "v2"
        }

        let result = isNotEmpty(['a', 'b'])(data)

        expect(result).toHaveSize(0)
    })

    it("isNotEmpty should return a message when a field is empty", function() {
        let data = {
            a: null
        }

        let result = isNotEmpty(['a'])(data)

        expect(result).toHaveSize(1)
        expect(result[0]).toBe("Parameter 'a' cannot be null")
    })

    it("isNotEmpty should return a message when multiple fields are empty", function() {
        let data = {
            a: null,
            b: null,
        }

        let result = isNotEmpty(['a','b'])(data)

        expect(result).toHaveSize(2)
    })

    it("isNotEmpty shouldn't return  message when the field being validate is not null", function() {
        let data = {
            a: "v1",
            b: null,
        }

        let result = isNotEmpty(['a'])(data)

        expect(result).toHaveSize(0)
    })

    it("isNotEmpty shouldn't return  message when fields are null", function() {
        let result = isNotEmpty([])({})

        expect(result).toHaveSize(0)
    })
})
