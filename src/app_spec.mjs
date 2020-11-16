import request from "request"
import app from "./app.mjs"

describe("GET /world", function () {

    let server = null

    beforeEach(function () {
        //we start express app here
        server = app.listen(2222, () => {
            console.log(`Starting express for integration tests`)
        })
    })


    it("calculate should return error when empty body", function (done) {
        request.post(requestOptions('http://localhost:2222/calculate', {}), function (error, response, body) {
            expect(response.statusCode).toBe(400)
            expect(body["errors"]).not.toBeUndefined()
            done();
        })
    })

    it("calculate should return error when body missing some parameter", function (done) {

        const fakeBody = {
            "a": true,
            "d": 3.33,
            "f": 9
        }

        request.post(requestOptions('http://localhost:2222/calculate', fakeBody), function(err,response,body){
            expect(response.statusCode).toBe(400)
            expect(body["errors"]).not.toBeUndefined()
            done()
        })
    })

    it("calculate should return result when exists complete body and rule exists", function (done) {

        const fakeBody = {
            "a": true,
            "b": true,
            "c": true,
            "d": 3.33,
            "e": 4,
            "f": 9
        }

        request.post(requestOptions('http://localhost:2222/calculate', fakeBody), function(err,response,body){
            expect(response.statusCode).toBe(200)
            expect(body.h).toBeDefined()
            expect(body.k).toBeDefined()
            expect(body.h).toBeGreaterThanOrEqual(0)
            expect(body.k).toBeGreaterThanOrEqual(0)
            done()
        })
    })

    it("calculate shouldn't return result when rule doesn't exists", function (done) {

        const fakeBody = {
            "a": false,
            "b": false,
            "c": false,
            "d": 3.33,
            "e": 4,
            "f": 9
        }

        request.post(requestOptions('http://localhost:2222/calculate', fakeBody), function(err,response,body){
            expect(response.statusCode).toBe(400)
            expect(body["errors"]).toBe("Input dont fit in any configured base rule or custom rule")
            done()
        })
    })

    it("calculate should validate real calculation", function (done) {

        const fakeBody = {
            "a": true,
            "b": true,
            "c": true,
            "d": 3.33,
            "e": 8,
            "f": 7
        }

        request.post(requestOptions('http://localhost:2222/calculate', fakeBody), function(err,response,body){
            expect(response.statusCode).toBe(200)
            expect(body.h).toBe(10)
            expect(body.k).toBeCloseTo(3.46, 2)
            done()
        })
    })


    it("calculate should use custom rule", function (done) {

        const fakeBody = {
            "a": true,
            "b": true,
            "c": true,
            "d": 3.33,
            "e": 8,
            "f": 7
        }

        request.post(requestOptions('http://localhost:2222/calculate', fakeBody), function(err1,response1,body1){
            request.post(requestOptions('http://localhost:2222/calculate?rule=custom1', fakeBody), function(err2,response2,body2) {
                expect(response2.statusCode).toBe(200)
                expect(body1.h).toBe(body2.h)
                expect(body1.k).not.toBe(body2.k)
                done()
            })
        })
    })

    afterEach(function () {
        server.close()
    })
})

let requestOptions = (url, body) => {
    return {
        uri: url,
        headers: {'content-type' : 'application/json'},
        method: 'POST',
        json: body
    }
}
