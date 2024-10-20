// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Belt_List = require("rescript/lib/js/Belt_List.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

let oppHeroes = {
  hd: 0,
  tl: /* [] */0
};

let huntGrootCondition = false;

if (Belt_List.length(/* [] */0) > 0) {
  let x = Belt_List.filter(oppHeroes, h => Belt_List.headExn(/* [] */0) <= 1000);
  huntGrootCondition = Belt_List.length(x) === 0;
}

let huntGrootCondition2 = true;

if (Belt_List.length(/* [] */0) < 0) {
  let x$1 = Belt_List.filter(oppHeroes, h => Belt_List.headExn(/* [] */0) <= 1000);
  huntGrootCondition2 = Belt_List.length(x$1) === 0;
}

eq("File \"gpr_2608_test.res\", line 23, characters 5-12", huntGrootCondition, false);

eq("File \"gpr_2608_test.res\", line 24, characters 5-12", huntGrootCondition2, true);

Mt.from_pair_suites("Gpr_2608_test", suites.contents);

let nearestGroots = /* [] */0;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.nearestGroots = nearestGroots;
exports.oppHeroes = oppHeroes;
exports.huntGrootCondition = huntGrootCondition;
exports.huntGrootCondition2 = huntGrootCondition2;
/* huntGrootCondition Not a pure module */
