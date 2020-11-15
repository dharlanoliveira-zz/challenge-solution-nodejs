import base from "./base.mjs";

let custom2 = {
    ...base,
    h_m : (d, e, f) => (f + d + ( d * e / 100)),

    rule_a_b_not_c: function (a, b, c, d, e, f) {
        return (a && b && !c) ? {
            h: this.t,
            k: this.h_t(d, e, f)
        } : null
    },

    rule_a_not_b_c: function(a, b, c, d, e, f) {
        return (a && !b && c) ? {
            h: this.m,
            k: this.h_m(d, e, f)
        } : null
    }
}

custom2.customRules = [].concat(custom2.rule_a_not_b_c)

export default custom2
