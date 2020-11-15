import {ensureBody} from "./assertions/assertions.mjs";
import {isBoolean, isFloat, isInt, isNotEmpty} from "./assertions/rules.mjs";
import express from "express";
import bodyParser from "body-parser";
import base from "./rules/base.mjs";
import run from "./rules/run.mjs";

const app = express()
const port = 3000

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
    process(req.body,res)
})

let process = (data, res) => {
    let result = run(data, base, [])
    if (result !== null)
        res.status(200).send(result)
    else
        res.status(400).send('Input dont fit in any configured base rule or custom rule')
}

app.listen(port, () => {
    console.log(`Challenge app is listening on http://localhost:${port}`)
})
