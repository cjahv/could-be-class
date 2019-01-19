/**
 * Checks if an object could be an instantiable class.
 * @param strict If `true`, when testing ES5 class, will check if its name's 
 *  first character is upper-cased.
 */
export function isClass(obj: any, strict?: boolean): boolean;
export default isClass;