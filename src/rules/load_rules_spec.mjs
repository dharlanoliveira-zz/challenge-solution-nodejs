import { loadRules } from "./load_rules.mjs"
import base from "./base.mjs";
import custom1 from "./custom1.mjs";
import custom2 from "./custom2.mjs";

describe("testing load rules", function() {

    it("loadRules should return base when there isn't custom rules", function() {
        let rules = loadRules()

        expect(rules).toEqual(base)
    })

    it("loadRules should return base when parameter undefined", function() {
        let rules = loadRules(undefined)

        expect(rules).toEqual(base)
    })

    it("loadRules should return base when parameter null", function() {
        let rules = loadRules(null)

        expect(rules).toEqual(base)
    })

    it("loadRules should return custom1 when parameter custom1", function() {
        let rules = loadRules("custom1")

        expect(rules).toEqual(custom1)
    })

    it("loadRules should return custom2 when parameter custom1", function() {
        let rules = loadRules("custom2")

        expect(rules).toEqual(custom2)
    })


})

