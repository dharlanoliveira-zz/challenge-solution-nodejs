
//Returning bad request (best semantic choice) because the body hasn't the expected structure
let ensureBody = (req,res, rules) => {
    let body = req.body
    let errorMessage = rules.map((r) => r(body)).reduce((a1, a2) => [].concat(a1).concat(a2)).join('. ')

    if(errorMessage !== undefined && errorMessage !== "") {
        res.status(400).send({
            errors: errorMessage
        });
        throw Error(`Invalid request - ${errorMessage}`)
    }
}

export {ensureBody}
