"use strict";

const assert = require("assert");
const couldBeClass = require(".").default;

var str = "This is a string";
assert.ok(!couldBeClass(str));

var num = 123;
assert.ok(!couldBeClass(num));

class A { }
assert.ok(couldBeClass(A));

function B() {
    this.name = this.constructor.name;
}
assert.ok(couldBeClass(B));

function C() {
    this["name"] = this.constructor.name;
}
assert.ok(couldBeClass(C));

function D() { }
D.prototype.show = function () { }
assert.ok(couldBeClass(D));

function E() { }
Object.defineProperty(E.prototype, "size", {
    get() {
        return this.length;
    }
});
assert.ok(couldBeClass(E));

var F = function () { };
assert.ok(!couldBeClass(F));

var G = new Function();
assert.ok(!couldBeClass(G));

function TsEs5Class() {
    var _this = _super.call(this) || this;
}
assert.ok(couldBeClass(TsEs5Class));

function TsEs5Class2() {
    return _super.apply(this, arguments) || this;
}
assert.ok(couldBeClass(TsEs5Class2));

function notClass() {
    console.log("this is not a class");
}
assert.ok(!couldBeClass(notClass));

function IsClass() {
    console.log("this is a class");
}
assert.ok(couldBeClass(IsClass, true)); // strict mode

function aMethod() {
    this.desc = "this is a method instead of a class";
}
assert.ok(!couldBeClass(aMethod, true)); // strict mode

function* GenFunc() {
    this.desc = "Error will be thrown if trying to instantiate a Generator function.";
}
assert.ok(!couldBeClass(GenFunc));

if (parseFloat(process.version.slice(1)) >= 7.6) {
    require("./test-async");
}

require("./test-extends");

console.log("#### OK ####"); // should outout OK