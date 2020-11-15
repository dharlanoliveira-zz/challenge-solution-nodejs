import {filterNotNull, checkIsArrayStrings} from "../util/array.mjs";

let isNotEmpty = (parameters) => {
    checkIsArrayStrings(parameters)
    return (data) => {
        return filterNotNull(parameters.map((f) => {
            return (data[f] === null || data[f] === undefined) ? `Parameter '${f}' cannot be null` : null
        }))
    }
}

let isBoolean = (parameters) => {
    checkIsArrayStrings(parameters)
    return (data) => {
        return filterNotNull(parameters.map((f) => {
            return (typeof data[f] !== 'boolean') ? `Parameter '${f}' should be a boolean` : null
        }))
    }
}

let isInt = (parameters) => {
    checkIsArrayStrings(parameters)
    return (data) => {
        return filterNotNull(parameters.map((f) => {
            return !(typeof data[f] === 'number' &&
                isFinite(data[f]) &&
                Math.floor(data[f]) === data[f]) ? `Parameter '${f}' should be a integer` : null
        }))
    }
}

let isFloat = (parameters) => {
    checkIsArrayStrings(parameters)
    return (data) => {
        return filterNotNull(parameters.map((f) => {
            return !(typeof data[f] === 'number' &&
                isFinite(data[f]) &&
                Math.floor(data[f]) !== data[f]) ? `Parameter '${f}' should be a float` : null
        }))
    }
}

export {isNotEmpty, isInt, isBoolean, isFloat}
