import base from "./base.mjs";

let custom1 = {...base}
custom1.h_p = (d, e, _) => (2 * d + (d * e / 100 ))

export default custom1
