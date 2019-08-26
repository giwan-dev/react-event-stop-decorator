"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stop(target, key, descriptor) {
    if (descriptor.value === undefined) {
        throw new TypeError(key + " is not method");
    }
    var fn = descriptor.value;
    descriptor.value = function (e) {
        e.stopPropagation();
        fn.bind(this)(e);
    };
    return descriptor;
}
exports.default = stop;
