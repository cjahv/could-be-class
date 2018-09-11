/**
 * Checks if an object could be an instantiable class.
 * @param {any} obj
 * @returns {boolean}
 */
function couldBeClass(obj) {
    if (typeof obj != "function") return false;

    var str = obj.toString();
    
    // async function or arrow function
    if (obj.prototype === undefined) return false;
    // generator function and malformed extends
    if (obj.prototype.constructor !== obj) return false;
     // ES6 class
    if (str.slice(0, 5) == "class") return true;
    // has own prototype properties
    if (Object.getOwnPropertyNames(obj.prototype).length >= 2) return true;
    // anonymous function
    if (str.match(/function\s+\(|function\s+anonymous\(/)) return false;
     // has `this` in the body
    if (str.match(/\b\(this\b|\bthis[\.\[]\b/)) return true;

    return false;
}

exports.couldBeClass = couldBeClass;
exports.default = couldBeClass;