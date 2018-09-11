const assert = require("assert");
const couldBeClass = require(".").default;

async function AsyncFunc() {
    this.desc = "Error will be thrown if trying to instantiate an async function.";
}
assert.ok(!couldBeClass(AsyncFunc));