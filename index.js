/**
 * Checks if an object could be an instantiable class.
 * @param {any} obj
 * @param {boolean} strict
 * @returns {boolean}
 */
function couldBeClass(obj, strict) {
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
    if (/^function\s+\(|^function\s+anonymous\(/.test(str)) return false;
    // ES5 class without `this` in the body and the name's first character 
    // upper-cased.
    if (strict && /^function\s+[A-Z]/.test(str)) return true;
     // has `this` in the body
    if (!strict && /\b\(this\b|\bthis[\.\[]\b/.test(str)) return true;

    return false;
}

exports.couldBeClass = couldBeClass;
exports.default = couldBeClass;