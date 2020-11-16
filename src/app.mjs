import express from "express";
import bodyParser from "body-parser";

import {ensureBody} from "./validation/ensure.mjs";
import {isBoolean, isFloat, isInt, isNotEmpty} from "./validation/validation.mjs";
import {applyRulesToInput} from "./rules/apply_rules.mjs";
import {loadRules} from "./rules/load_rules.mjs";

const app = express()
app.use(bodyParser.json())

app.post('/calculate', (req, res) => {
    ensureBody(req, res,
        [
            isNotEmpty(['a', 'b', 'c', 'd', 'e', 'f']),
            isBoolean(['a', 'b', 'c']),
            isFloat(['d']),
            isInt(['e', 'f'])
        ]
    )
    process(req,res)
})

let process = (req, res) => {
    let customRule = req.query["rule"]
    let result = applyRulesToInput(req.body,loadRules(customRule))

    res.setHeader("Content-Type", "application/json")

    if (result !== null)
        res.status(200).send(result)
    else
        res.status(400).send({
            errors: 'Input dont fit in any configured base rule or custom rule'
        })
}

export default app
