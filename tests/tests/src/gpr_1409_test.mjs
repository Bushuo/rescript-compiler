// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mt from "./mt.mjs";
import * as Belt_List from "rescript/lib/es6/Belt_List.js";
import * as String_set from "./string_set.mjs";
import * as Primitive_option from "rescript/lib/es6/Primitive_option.js";

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + test_id.contents.toString()),
      () => ({
        TAG: "Eq",
        _0: x,
        _1: y
      })
    ],
    tl: suites.contents
  };
}

let a = {};

let b = {
  foo: "42"
};

function map(f, x) {
  if (x !== undefined) {
    return Primitive_option.some(f(Primitive_option.valFromOption(x)));
  }
  
}

function make(foo, param) {
  let tmp = {};
  let tmp$1 = map(prim => prim.toString(), foo);
  if (tmp$1 !== undefined) {
    tmp.foo = tmp$1;
  }
  return tmp;
}

let a_ = make(undefined, undefined);

let b_ = make(42, undefined);

eq("File \"gpr_1409_test.res\", line 31, characters 3-10", b_.foo, "42");

console.log(Object.keys(a_));

console.log(a, b, a_, b_);

eq("File \"gpr_1409_test.res\", line 36, characters 3-10", Object.keys(a_).length, 0);

let test2 = {
  hi: 2
};

function test3(_open, xx__hi) {
  let tmp = {
    hi: 2
  };
  if (_open !== undefined) {
    tmp._open = _open;
  }
  if (xx__hi !== undefined) {
    tmp.xx__hi = xx__hi;
  }
  return tmp;
}

function test4(_open, xx__hi) {
  console.log("no inlin");
  let tmp = {
    _open: _open,
    hi: 2
  };
  if (xx__hi !== undefined) {
    tmp.xx__hi = xx__hi;
  }
  return tmp;
}

function test5(f, x) {
  console.log("no inline");
  let tmp = {
    hi: 2
  };
  let tmp$1 = f(x);
  if (tmp$1 !== undefined) {
    tmp._open = tmp$1;
  }
  let tmp$2 = f(x);
  if (tmp$2 !== undefined) {
    tmp.xx__hi = tmp$2;
  }
  return tmp;
}

function test6(f, x) {
  console.log("no inline");
  let x$1 = {
    contents: 3
  };
  let tmp = {
    hi: 2
  };
  let tmp$1 = (x$1.contents = x$1.contents + 1 | 0, x$1.contents);
  if (tmp$1 !== undefined) {
    tmp._open = tmp$1;
  }
  let tmp$2 = f(x$1);
  if (tmp$2 !== undefined) {
    tmp.xx__hi = tmp$2;
  }
  return tmp;
}

function keys(xs, ys) {
  return String_set.equal(String_set.of_list(xs), String_set.of_list(Belt_List.fromArray(ys)));
}

eq("File \"gpr_1409_test.res\", line 74, characters 3-10", keys({
  hd: "hi",
  tl: /* [] */0
}, Object.keys(test3(undefined, undefined))), true);

eq("File \"gpr_1409_test.res\", line 76, characters 3-10", keys({
  hd: "hi",
  tl: {
    hd: "_open",
    tl: /* [] */0
  }
}, Object.keys(test3(2, undefined))), true);

eq("File \"gpr_1409_test.res\", line 78, characters 3-10", keys({
  hd: "hi",
  tl: {
    hd: "_open",
    tl: {
      hd: "xx__hi",
      tl: /* [] */0
    }
  }
}, Object.keys(test3(2, 2))), true);

Mt.from_pair_suites("Gpr_1409_test", suites.contents);

export {
  suites,
  test_id,
  eq,
  a,
  b,
  map,
  make,
  a_,
  b_,
  test2,
  test3,
  test4,
  test5,
  test6,
  keys,
}
/* a_ Not a pure module */
