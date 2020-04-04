/**
 * Checks if an object could be an instantiable class.
 */
export function isClass(obj: any): obj is new (...args: any[]) => any;
export default isClass;