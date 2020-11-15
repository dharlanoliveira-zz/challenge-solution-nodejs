let base = {
    m : 5,
    p : 10,
    t : 15,

    h_m : (d, e, _) => (d + (d * e / 10)),
    h_p : (d, e, f) => (d + (d * (e - f) / 25.5)),
    h_t : (d, e, f) => (d * f / 30),

    rule_a_b_not_c : function(a, b, c, d, e, f) {
        return (a && b && !c) ? {
            h: this.m,
            k: this.h_m(d, e, f)
        } : null
    },

    rule_a_b_c: function(a, b, c, d, e, f) {
        return (a && b && c) ? {
            h: this.p,
            k: this.h_p(d, e, f)
        } : null
    },

    rule_not_a_b_c: function(a, b, c, d, e, f) {
        return (!a && b && c) ? {
            h: this.t,
            k: this.h_t(d, e, f)
        } : null
    },

    customRules: []
}

export default base
