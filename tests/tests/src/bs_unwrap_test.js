// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Primitive_option = require("rescript/lib/js/Primitive_option.js");

console.log([
  "hello world",
  1
]);

console.log(1337);

console.log("hello world");

let arg_string = {
  NAME: "String",
  VAL: "hi runtime"
};

console.log(arg_string.VAL);

let arg_pair = {
  NAME: "Pair",
  VAL: [
    "hi",
    1
  ]
};

console.log(arg_pair.VAL);

console.log();

console.log(1, undefined);

console.log(2, "hi");

console.log(3, "hi");

console.log(4, undefined);

let some_arg = {
  NAME: "Bool",
  VAL: true
};

console.log(5, Primitive_option.unwrapPolyVar(some_arg));

console.log(6, undefined);

console.log(7, Primitive_option.unwrapPolyVar((console.log("trace"), undefined)));

function dyn_log3(prim0, prim1, prim2) {
  console.log(prim0.VAL, Primitive_option.unwrapPolyVar(prim1));
}

dyn_log3({
  NAME: "Int",
  VAL: 8
}, {
  NAME: "Bool",
  VAL: true
}, undefined);

console.log("foo");

console.log({
  foo: 1
});

function dyn_log4(prim) {
  console.log(prim.VAL);
}

console.log({
  foo: 2
});

function f(x) {
  console.log(x.VAL);
}

function ff0(x, p) {
  console.log(Primitive_option.unwrapPolyVar(x), p);
}

function ff1(x, p) {
  console.log(Primitive_option.unwrapPolyVar(x()), p);
}

function test00() {
  return {
    a: 1,
    b: 2,
    x: undefined
  };
}

let none_arg;

exports.arg_string = arg_string;
exports.arg_pair = arg_pair;
exports.some_arg = some_arg;
exports.none_arg = none_arg;
exports.dyn_log3 = dyn_log3;
exports.dyn_log4 = dyn_log4;
exports.f = f;
exports.ff0 = ff0;
exports.ff1 = ff1;
exports.test00 = test00;
/*  Not a pure module */
