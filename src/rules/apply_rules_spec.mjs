import { applyRulesToInput } from "./apply_rules.mjs"

let inputData = {
    "a": true,
    "b": true,
    "c": true,
    "d": 3.33,
    "e": 4,
    "f": 9,
}

let fakeRules = {

    rule_a_b_not_c : function(a, b, c, d, e, f) {},

    rule_a_b_c: function(a, b, c, d, e, f) {},

    rule_not_a_b_c: function(a, b, c, d, e, f) {},

    rule_xxx: function(a, b, c, d, e, f) {},

    customRules: []

}

describe("testing apply rules to input", function() {

    it("applyRulesToInput should execute allRules", function() {
        let rulesBase = spyOnAllFunctions(fakeRules)
        fakeRules.customRules = [].concat(fakeRules.rule_xxx)

        applyRulesToInput(inputData,rulesBase)

        expect(rulesBase.rule_a_b_not_c).toHaveBeenCalled()
        expect(rulesBase.rule_a_b_c).toHaveBeenCalled()
        expect(rulesBase.rule_not_a_b_c).toHaveBeenCalled()
        expect(rulesBase.rule_xxx).toHaveBeenCalled()
    })

    fit("applyRulesToInput should return the result of the rule", function() {
        let rules = {...fakeRules}
        rules.rule_not_a_b_c = () => {
            return { "h": 33, "k": 12}
        }
        let result = applyRulesToInput(inputData,rules)

        expect(result.h).toEqual(33)
        expect(result.k).toEqual(12)
    })

    fit("applyRulesToInput should return first result", function() {
        let rules = {...fakeRules}
        rules.rule_a_b_c = () => {
            return { "h": 12, "k": 1}
        }
        rules.rule_not_a_b_c = () => {
            return { "h": 44, "k": 22}
        }
        let result = applyRulesToInput(inputData,rules)

        expect(result.h).toEqual(12)
        expect(result.k).toEqual(1)
    })


})

