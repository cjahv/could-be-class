var tslib = require("tslib");
var EventEmitter = require("events").EventEmitter;
var assert = require("assert");
var couldBeClass = require(".").default;

var MyEvent = (function (_super) {
    tslib.__extends(MyEvent, _super);
    function MyEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyEvent;
}(EventEmitter));

assert.ok(couldBeClass(MyEvent));