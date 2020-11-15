import custom1 from "./custom1.mjs"

describe("testing custom1 rules", function() {

    it("rule_a_b_not_c should return value when a=true, b=true and c=false", function() {
        let result = custom1.rule_a_b_not_c(true,true,false, 3.33, 8, 7)

        expect(result.h).toBe(5)
        expect(result.k).toBeCloseTo(5.99, 2)
    })

    it("rule_a_b_c should return value when a=true, b=true and c=true", function() {
        let result = custom1.rule_a_b_c(true,true,true, 3.33, 8, 7)

        expect(result.h).toBe(10)
        expect(result.k).toBeCloseTo(6.93, 2)
    })

    it("rule_not_a_b_c should return value when a=false, b=true and c=true", function() {
        let result = custom1.rule_not_a_b_c(false,true,true, 3.33, 8, 7)

        expect(result.h).toBe(15)
        expect(result.k).toBeCloseTo(0.78, 2)
    })


})

