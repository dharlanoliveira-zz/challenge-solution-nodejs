import {isBoolean, isFloat, isInt, isNotEmpty} from "./rules.mjs"

describe("testing rules method isInt", function() {

    it("isInt should return error message if parameter is not array", function() {
        expect( () => {
            isInt("")({})
        }).toThrowError("Input parameters should be a array of strings")
        expect( () => {
            isFloat("")({})
        }).toThrowError("Input parameters should be a array of strings")
        expect( () => {
            isBoolean("")({})
        }).toThrowError("Input parameters should be a array of strings")
        expect( () => {
            isNotEmpty("")({})
        }).toThrowError("Input parameters should be a array of strings")
    })

    it("isInt should return error message if array parameter is not string", function() {
        expect( () => {
            isInt([1])({})
        }).toThrowError("Input parameters should be a array of strings")
        expect( () => {
            isFloat([1])({})
        }).toThrowError("Input parameters should be a array of strings")
        expect( () => {
            isBoolean([1])({})
        }).toThrowError("Input parameters should be a array of strings")
        expect( () => {
            isNotEmpty([1])({})
        }).toThrowError("Input parameters should be a array of strings")
    })


})

