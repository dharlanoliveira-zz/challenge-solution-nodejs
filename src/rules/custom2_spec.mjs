import custom2 from "./custom2.mjs"

describe("testing custom2 rules", function() {

    it("rule_a_b_not_c should return value when a=true, b=true and c=false", function() {
        let result = custom2.rule_a_b_not_c(true,true,false, 3.33, 8, 7)

        expect(result.h).toBe(15)
        expect(result.k).toBeCloseTo(0.78, 2)
    })

    it("rule_a_b_c should return value when a=true, b=true and c=true", function() {
        let result = custom2.rule_a_b_c(true,true,true, 3.33, 8, 7)

        expect(result.h).toBe(10)
        expect(result.k).toBeCloseTo(3.46, 2)
    })

    it("rule_not_a_b_c should return value when a=false, b=true and c=true", function() {
        let result = custom2.rule_not_a_b_c(false,true,true, 3.33, 8, 7)

        expect(result.h).toBe(15)
        expect(result.k).toBeCloseTo(0.78, 2)
    })

    it("rule_a_not_b_c should return value when a=true, b=false and c=true", function() {
        let result = custom2.rule_a_not_b_c(true,false,true, 3.33, 8, 7)

        expect(result.h).toBe(5)
        expect(result.k).toBeCloseTo(10.60, 2)
    })

    it("rule_a_not_b_c should return undefined  when a = !true or b != false or c != true", function() {
        let result = custom2.rule_a_not_b_c(false,false,true, 3.33, 8, 7)

        expect(result).toBeNull()
    })

    it("custom2 has one custom rule", function() {
        expect(custom2.customRules).toHaveSize(1)
        expect(custom2.customRules[0]).toEqual(custom2.rule_a_not_b_c)
    })

})

