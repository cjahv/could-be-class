/**
 * Checks if an object could be an instantiable class.
 */
export function couldBeClass(obj: any): obj is new (...args: any[]) => any;
export default couldBeClass;
