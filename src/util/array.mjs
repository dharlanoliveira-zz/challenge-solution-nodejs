let filterNotNull = (array) => {
    return array.filter((i) => i !== null && i !== undefined)
}

let checkIsArrayStrings = (array) => {
    if(!Array.isArray(array) || !array.every((i) => typeof (i) === "string")) {
        throw Error ("Input parameters should be a array of strings")
    }
}

export {filterNotNull, checkIsArrayStrings}
