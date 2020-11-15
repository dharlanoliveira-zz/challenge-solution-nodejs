import {filterNotNull} from "../util/array.mjs";

export default ({a, b, c, d, e, f}, rules, customRules) => {
    const allRules = [rules.rule_a_b_not_c, rules.rule_a_b_c, rules.rule_not_a_b_c, ...customRules]

    let results =  filterNotNull(allRules.map((r) => {
        let rule = r.bind(rules)
        return rule(a, b, c, d, e, f)
    }))
    return ( results !== undefined && results.length > 0) ? results[0] : null
}
