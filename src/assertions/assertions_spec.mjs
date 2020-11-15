import {ensureBody} from "./assertions.mjs";

describe("testing method that ensure body http requisition is valid", function() {

    it("ensureBody should concat response error when one message has error", function() {
        let r1 = (_) => ["Error 1"]
        let r2 = (_) => []

        let res = mockResponse()

        expect(() => {
            ensureBody({ body: {} },res, [r1, r2])
        }).toThrowError("Invalid request - Error 1")

        expect(res.status).toHaveBeenCalled()
        expect(res.status.calls.argsFor(0)).toEqual([400])
        expect(res.send).toHaveBeenCalled()
        expect(res.send).toHaveBeenCalledWith(jasmine.objectContaining({
            errors: "Error 1"
        }))
    })

    it("ensureBody should concat response error when two messages has errors", function() {
        let r1 = (_) => ["Error 1"]
        let r2 = (_) => ["Error 2"]

        let res = mockResponse()

        expect(() => {
            ensureBody({ body: {} },res, [r1, r2])
        }).toThrowError("Invalid request - Error 1. Error 2")

        expect(res.status).toHaveBeenCalled()
        expect(res.status.calls.argsFor(0)).toEqual([400])
        expect(res.send).toHaveBeenCalledWith(jasmine.objectContaining({
            errors: "Error 1. Error 2"
        }))
    })

    it("ensureBody shouldn't response error when there isn't any error message", function() {
        let r1 = (_) => []
        let r2 = (_) => []

        let res = mockResponse()

        ensureBody({ body: {} },res, [r1, r2])

        expect(res.status).not.toHaveBeenCalled()
        expect(res.send).not.toHaveBeenCalled()
    })


})


let mockResponse = () => {
    let res = {
        send: (_) => { } ,
        status: (_) => { }
    }

    spyOn(res, "send").and.callFake(() => res );

    spyOn(res, "status").and.callFake(() => res);

    return res
}
