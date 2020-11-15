import base from "./base.mjs";
import custom1 from "./custom1.mjs";
import custom2 from "./custom2.mjs";


let loadRules = (rulesIdentification = "base") => {
    if(rulesIdentification === "custom1") {
        return custom1
    } else if(rulesIdentification === "custom2") {
        return custom2
    } else {
        return base
    }
}

export { loadRules }
