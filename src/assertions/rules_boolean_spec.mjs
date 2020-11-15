import {isBoolean} from "./rules.mjs"

describe("testing rules method isBoolean", function() {
    it("isBoolean shouldn't return message when the field is boolean", function() {
        let data = {
            a: true
        }

        let result = isBoolean(['a'])(data)

        expect(result).toHaveSize(0)
    })

    it("isBoolean should return message when the field is float", function() {
        let data = {
            a: 1.01
        }

        let result = isBoolean(['a'])(data)

        expect(result).toHaveSize(1)
    })

    it("isBoolean should return message when the field is int", function() {
        let data = {
            a: 2
        }

        let result = isBoolean(['a'])(data)

        expect(result).toHaveSize(1)
        expect(result[0]).toBe("Parameter 'a' should be a boolean")
    })

    it("isBoolean should return message when the field is string", function() {
        let data = {
            a: "xxx"
        }

        let result = isBoolean(['a'])(data)

        expect(result).toHaveSize(1)
    })

    it("isInt shouldn't return message when two fields are boolean", function() {
        let data = {
            a: true,
            b: false
        }

        let result = isBoolean(['a','b'])(data)

        expect(result).toHaveSize(0)
    })


})
