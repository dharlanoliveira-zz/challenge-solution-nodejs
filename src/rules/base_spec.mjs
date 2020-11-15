import base from "./base.mjs"

describe("testing base rules", function() {

    it("rule_a_b_not_c should return value when a=true, b=true and c=false", function() {
        let result = base.rule_a_b_not_c(true,true,false, 3.33, 8, 7)

        expect(result.h).toBe(5)
        expect(result.k).toBeCloseTo(5.99, 2)
    })

    it("rule_a_b_not_c should return undefined when a !=true ou  b!= true or c != false", function() {
        let result = base.rule_a_b_not_c(true,true,true, 3.33, 8, 7)

        expect(result).toBeNull()
    })

    it("rule_a_b_c should return value when a=true, b=true and c=true", function() {
        let result = base.rule_a_b_c(true,true,true, 3.33, 8, 7)

        expect(result.h).toBe(10)
        expect(result.k).toBeCloseTo(3.46, 2)
    })

    it("rule_a_b_c should return undefined when a !=true ou  b!= true or c != true", function() {
        let result = base.rule_a_b_c(true,true,false, 3.33, 8, 7)

        expect(result).toBeNull()
    })

    it("rule_not_a_b_c should return value when a=false, b=true and c=true", function() {
        let result = base.rule_not_a_b_c(false,true,true, 3.33, 8, 7)

        expect(result.h).toBe(15)
        expect(result.k).toBeCloseTo(0.78, 2)
    })

    it("rule_not_a_b_c should return undefined when a !=false ou  b!= true or c != true", function() {
        let result = base.rule_a_b_c(false,true,false, 3.33, 8, 7)

        expect(result).toBeNull()
    })
})

