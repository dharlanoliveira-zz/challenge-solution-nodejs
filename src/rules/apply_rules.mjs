import {filterNotNull} from "../util/array.mjs";

let applyRulesToInput = ({a, b, c, d, e, f}, rulesBase) => {
    const allRules = [rulesBase.rule_a_b_not_c, rulesBase.rule_a_b_c, rulesBase.rule_not_a_b_c, ...rulesBase.customRules]

    let results =  filterNotNull(allRules.map((r) => {
        let rule = r.bind(rulesBase)
        return rule(a, b, c, d, e, f)
    }))
    return ( results !== undefined && results.length > 0) ? results[0] : null
}

export { applyRulesToInput }
