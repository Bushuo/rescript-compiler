// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Belt_List = require("rescript/lib/js/Belt_List.js");
let Belt_Array = require("rescript/lib/js/Belt_Array.js");
let Primitive_int = require("rescript/lib/js/Primitive_int.js");
let Primitive_object = require("rescript/lib/js/Primitive_object.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

function $$throw(loc, x) {
  Mt.throw_suites(test_id, suites, loc, x);
}

function neq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + test_id.contents.toString()),
      () => ({
        TAG: "Neq",
        _0: x,
        _1: y
      })
    ],
    tl: suites.contents
  };
}

function push(prim0, prim1) {
  prim0.push(prim1);
}

console.log([
  1,
  2,
  3,
  4
].filter(x => x > 2).map((x, i) => x + i | 0).reduce((x, y) => x + y | 0, 0));

let v = [
  1,
  2
];

eq("File \"bs_array_test.res\", line 31, characters 4-11", [
  Belt_Array.get(v, 0),
  Belt_Array.get(v, 1),
  Belt_Array.get(v, 2),
  Belt_Array.get(v, 3),
  Belt_Array.get(v, -1)
], [
  1,
  2,
  undefined,
  undefined,
  undefined
]);

$$throw("File \"bs_array_test.res\", line 35, characters 8-15", () => {
  Belt_Array.getExn([
    0,
    1
  ], -1);
});

$$throw("File \"bs_array_test.res\", line 36, characters 8-15", () => {
  Belt_Array.getExn([
    0,
    1
  ], 2);
});

function f(extra) {
  return Belt_Array.getExn([
    0,
    1
  ], extra);
}

b("File \"bs_array_test.res\", line 38, characters 4-11", Primitive_object.equal([
  f(0),
  f(1)
], [
  0,
  1
]));

$$throw("File \"bs_array_test.res\", line 44, characters 8-15", () => Belt_Array.setExn([
  0,
  1
], -1, 0));

$$throw("File \"bs_array_test.res\", line 45, characters 8-15", () => Belt_Array.setExn([
  0,
  1
], 2, 0));

b("File \"bs_array_test.res\", line 46, characters 4-11", !Belt_Array.set([
  1,
  2
], 2, 0));

let v$1 = [
  1,
  2
];

if (!Belt_Array.set(v$1, 0, 0)) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "bs_array_test.res",
      51,
      6
    ],
    Error: new Error()
  };
}

b("File \"bs_array_test.res\", line 48, characters 4-11", Belt_Array.getExn(v$1, 0) === 0);

let v$2 = [
  1,
  2
];

if (!Belt_Array.set(v$2, 1, 0)) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "bs_array_test.res",
      59,
      6
    ],
    Error: new Error()
  };
}

b("File \"bs_array_test.res\", line 56, characters 4-11", Belt_Array.getExn(v$2, 1) === 0);

let v$3 = [
  1,
  2
];

b("File \"bs_array_test.res\", line 64, characters 4-11", (Belt_Array.setExn(v$3, 0, 0), Belt_Array.getExn(v$3, 0) === 0));

let v$4 = [
  1,
  2
];

b("File \"bs_array_test.res\", line 72, characters 4-11", (Belt_Array.setExn(v$4, 1, 0), Belt_Array.getExn(v$4, 1) === 0));

function add(x, y) {
  return x + y | 0;
}

let v$5 = Belt_Array.makeBy(3000, i => i);

let u = Belt_Array.shuffle(v$5);

neq("File \"bs_array_test.res\", line 85, characters 6-13", u, v$5);

eq("File \"bs_array_test.res\", line 87, characters 5-12", Belt_Array.reduce(u, 0, add), Belt_Array.reduce(v$5, 0, add));

b("File \"bs_array_test.res\", line 92, characters 4-11", Primitive_object.equal(Belt_Array.range(0, 3), [
  0,
  1,
  2,
  3
]));

b("File \"bs_array_test.res\", line 93, characters 4-11", Primitive_object.equal(Belt_Array.range(3, 0), []));

b("File \"bs_array_test.res\", line 94, characters 4-11", Primitive_object.equal(Belt_Array.range(3, 3), [3]));

b("File \"bs_array_test.res\", line 96, characters 4-11", Primitive_object.equal(Belt_Array.rangeBy(0, 10, 3), [
  0,
  3,
  6,
  9
]));

b("File \"bs_array_test.res\", line 97, characters 4-11", Primitive_object.equal(Belt_Array.rangeBy(0, 12, 3), [
  0,
  3,
  6,
  9,
  12
]));

b("File \"bs_array_test.res\", line 98, characters 4-11", Primitive_object.equal(Belt_Array.rangeBy(33, 0, 1), []));

b("File \"bs_array_test.res\", line 99, characters 4-11", Primitive_object.equal(Belt_Array.rangeBy(33, 0, -1), []));

b("File \"bs_array_test.res\", line 100, characters 4-11", Primitive_object.equal(Belt_Array.rangeBy(3, 12, -1), []));

b("File \"bs_array_test.res\", line 101, characters 4-11", Primitive_object.equal(Belt_Array.rangeBy(3, 3, 0), []));

b("File \"bs_array_test.res\", line 102, characters 4-11", Primitive_object.equal(Belt_Array.rangeBy(3, 3, 1), [3]));

eq("File \"bs_array_test.res\", line 106, characters 5-12", Belt_Array.reduceReverse([], 100, (prim0, prim1) => prim0 - prim1 | 0), 100);

eq("File \"bs_array_test.res\", line 107, characters 5-12", Belt_Array.reduceReverse([
  1,
  2
], 100, (prim0, prim1) => prim0 - prim1 | 0), 97);

eq("File \"bs_array_test.res\", line 108, characters 5-12", Belt_Array.reduceReverse([
  1,
  2,
  3,
  4
], 100, (prim0, prim1) => prim0 - prim1 | 0), 90);

eq("File \"bs_array_test.res\", line 109, characters 5-12", Belt_Array.reduceWithIndex([
  1,
  2,
  3,
  4
], 0, (acc, x, i) => (acc + x | 0) + i | 0), 16);

b("File \"bs_array_test.res\", line 110, characters 4-11", Belt_Array.reduceReverse2([
  1,
  2,
  3
], [
  1,
  2
], 0, (acc, x, y) => (acc + x | 0) + y | 0) === 6);

function addone(x) {
  return x + 1 | 0;
}

function makeMatrixExn(sx, sy, init) {
  if (!(sx >= 0 && sy >= 0)) {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "bs_array_test.res",
        116,
        2
      ],
      Error: new Error()
    };
  }
  let res = new Array(sx);
  for (let x = 0; x < sx; ++x) {
    let initY = new Array(sy);
    for (let y = 0; y < sy; ++y) {
      initY[y] = init;
    }
    res[x] = initY;
  }
  return res;
}

eq("File \"bs_array_test.res\", line 129, characters 5-12", Belt_Array.makeBy(0, param => 1), []);

eq("File \"bs_array_test.res\", line 130, characters 5-12", Belt_Array.makeBy(3, i => i), [
  0,
  1,
  2
]);

eq("File \"bs_array_test.res\", line 131, characters 5-12", makeMatrixExn(3, 4, 1), [
  [
    1,
    1,
    1,
    1
  ],
  [
    1,
    1,
    1,
    1
  ],
  [
    1,
    1,
    1,
    1
  ]
]);

eq("File \"bs_array_test.res\", line 132, characters 5-12", makeMatrixExn(3, 0, 0), [
  [],
  [],
  []
]);

eq("File \"bs_array_test.res\", line 133, characters 5-12", makeMatrixExn(0, 3, 1), []);

eq("File \"bs_array_test.res\", line 134, characters 5-12", makeMatrixExn(1, 1, 1), [[1]]);

eq("File \"bs_array_test.res\", line 135, characters 5-12", [].slice(0), []);

eq("File \"bs_array_test.res\", line 136, characters 5-12", Belt_Array.map([], prim => prim + 1 | 0), []);

eq("File \"bs_array_test.res\", line 137, characters 5-12", Belt_Array.mapWithIndex([], add), []);

eq("File \"bs_array_test.res\", line 138, characters 5-12", Belt_Array.mapWithIndex([
  1,
  2,
  3
], add), [
  1,
  3,
  5
]);

eq("File \"bs_array_test.res\", line 139, characters 5-12", Belt_List.fromArray([]), /* [] */0);

eq("File \"bs_array_test.res\", line 140, characters 5-12", Belt_List.fromArray([1]), {
  hd: 1,
  tl: /* [] */0
});

eq("File \"bs_array_test.res\", line 141, characters 5-12", Belt_List.fromArray([
  1,
  2,
  3
]), {
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: /* [] */0
    }
  }
});

eq("File \"bs_array_test.res\", line 142, characters 5-12", Belt_Array.map([
  1,
  2,
  3
], prim => prim + 1 | 0), [
  2,
  3,
  4
]);

eq("File \"bs_array_test.res\", line 143, characters 5-12", Belt_List.toArray(/* [] */0), []);

eq("File \"bs_array_test.res\", line 144, characters 5-12", Belt_List.toArray({
  hd: 1,
  tl: /* [] */0
}), [1]);

eq("File \"bs_array_test.res\", line 145, characters 5-12", Belt_List.toArray({
  hd: 1,
  tl: {
    hd: 2,
    tl: /* [] */0
  }
}), [
  1,
  2
]);

eq("File \"bs_array_test.res\", line 146, characters 5-12", Belt_List.toArray({
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: /* [] */0
    }
  }
}), [
  1,
  2,
  3
]);

let v$6 = Belt_Array.makeBy(10, i => i);

let v0 = Belt_Array.keep(v$6, x => x % 2 === 0);

let v1 = Belt_Array.keep(v$6, x => x % 3 === 0);

let v2 = Belt_Array.keepMap(v$6, x => {
  if (x % 2 === 0) {
    return x + 1 | 0;
  }
  
});

eq("File \"bs_array_test.res\", line 160, characters 5-12", v0, [
  0,
  2,
  4,
  6,
  8
]);

eq("File \"bs_array_test.res\", line 161, characters 5-12", v1, [
  0,
  3,
  6,
  9
]);

eq("File \"bs_array_test.res\", line 162, characters 5-12", v2, [
  1,
  3,
  5,
  7,
  9
]);

let a = [
  1,
  2,
  3,
  4,
  5
];

let match = Belt_Array.partition(a, x => x % 2 === 0);

eq("File \"bs_array_test.res\", line 168, characters 5-12", match[0], [
  2,
  4
]);

eq("File \"bs_array_test.res\", line 169, characters 5-12", match[1], [
  1,
  3,
  5
]);

let match$1 = Belt_Array.partition(a, x => x === 2);

eq("File \"bs_array_test.res\", line 171, characters 5-12", match$1[0], [2]);

eq("File \"bs_array_test.res\", line 172, characters 5-12", match$1[1], [
  1,
  3,
  4,
  5
]);

let match$2 = Belt_Array.partition([], x => false);

eq("File \"bs_array_test.res\", line 174, characters 5-12", match$2[0], []);

eq("File \"bs_array_test.res\", line 175, characters 5-12", match$2[1], []);

let a$1 = [
  1,
  2,
  3,
  4,
  5
];

eq("File \"bs_array_test.res\", line 180, characters 5-12", Belt_Array.slice(a$1, 0, 2), [
  1,
  2
]);

eq("File \"bs_array_test.res\", line 181, characters 5-12", Belt_Array.slice(a$1, 0, 5), [
  1,
  2,
  3,
  4,
  5
]);

eq("File \"bs_array_test.res\", line 182, characters 5-12", Belt_Array.slice(a$1, 0, 15), [
  1,
  2,
  3,
  4,
  5
]);

eq("File \"bs_array_test.res\", line 183, characters 5-12", Belt_Array.slice(a$1, 5, 1), []);

eq("File \"bs_array_test.res\", line 184, characters 5-12", Belt_Array.slice(a$1, 4, 1), [5]);

eq("File \"bs_array_test.res\", line 185, characters 5-12", Belt_Array.slice(a$1, -1, 1), [5]);

eq("File \"bs_array_test.res\", line 186, characters 5-12", Belt_Array.slice(a$1, -1, 2), [5]);

eq("File \"bs_array_test.res\", line 187, characters 5-12", Belt_Array.slice(a$1, -2, 1), [4]);

eq("File \"bs_array_test.res\", line 188, characters 5-12", Belt_Array.slice(a$1, -2, 2), [
  4,
  5
]);

eq("File \"bs_array_test.res\", line 189, characters 5-12", Belt_Array.slice(a$1, -2, 3), [
  4,
  5
]);

eq("File \"bs_array_test.res\", line 190, characters 5-12", Belt_Array.slice(a$1, -10, 3), [
  1,
  2,
  3
]);

eq("File \"bs_array_test.res\", line 191, characters 5-12", Belt_Array.slice(a$1, -10, 4), [
  1,
  2,
  3,
  4
]);

eq("File \"bs_array_test.res\", line 192, characters 5-12", Belt_Array.slice(a$1, -10, 5), [
  1,
  2,
  3,
  4,
  5
]);

eq("File \"bs_array_test.res\", line 193, characters 5-12", Belt_Array.slice(a$1, -10, 6), [
  1,
  2,
  3,
  4,
  5
]);

eq("File \"bs_array_test.res\", line 194, characters 5-12", Belt_Array.slice(a$1, 0, 0), []);

eq("File \"bs_array_test.res\", line 195, characters 5-12", Belt_Array.slice(a$1, 0, -1), []);

let a$2 = [
  1,
  2,
  3,
  4,
  5
];

eq("File \"bs_array_test.res\", line 200, characters 5-12", Belt_Array.sliceToEnd(a$2, 0), [
  1,
  2,
  3,
  4,
  5
]);

eq("File \"bs_array_test.res\", line 201, characters 5-12", Belt_Array.sliceToEnd(a$2, 5), []);

eq("File \"bs_array_test.res\", line 202, characters 5-12", Belt_Array.sliceToEnd(a$2, 4), [5]);

eq("File \"bs_array_test.res\", line 203, characters 5-12", Belt_Array.sliceToEnd(a$2, -1), [5]);

eq("File \"bs_array_test.res\", line 204, characters 5-12", Belt_Array.sliceToEnd(a$2, -2), [
  4,
  5
]);

eq("File \"bs_array_test.res\", line 205, characters 5-12", Belt_Array.sliceToEnd(a$2, -10), [
  1,
  2,
  3,
  4,
  5
]);

eq("File \"bs_array_test.res\", line 206, characters 5-12", Belt_Array.sliceToEnd(a$2, 6), []);

let a$3 = Belt_Array.makeBy(10, x => x);

Belt_Array.fill(a$3, 0, 3, 0);

eq("File \"bs_array_test.res\", line 211, characters 5-12", a$3.slice(0), [
  0,
  0,
  0,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]);

Belt_Array.fill(a$3, 2, 8, 1);

eq("File \"bs_array_test.res\", line 213, characters 5-12", a$3.slice(0), [
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
]);

Belt_Array.fill(a$3, 8, 1, 9);

eq("File \"bs_array_test.res\", line 215, characters 5-12", a$3.slice(0), [
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  9,
  1
]);

Belt_Array.fill(a$3, 8, 2, 9);

eq("File \"bs_array_test.res\", line 217, characters 5-12", a$3.slice(0), [
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  9,
  9
]);

Belt_Array.fill(a$3, 8, 3, 12);

eq("File \"bs_array_test.res\", line 219, characters 5-12", a$3.slice(0), [
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  12,
  12
]);

Belt_Array.fill(a$3, -2, 3, 11);

eq("File \"bs_array_test.res\", line 221, characters 5-12", a$3.slice(0), [
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  11,
  11
]);

Belt_Array.fill(a$3, -3, 3, 10);

eq("File \"bs_array_test.res\", line 223, characters 5-12", a$3.slice(0), [
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  10,
  10,
  10
]);

Belt_Array.fill(a$3, -3, 1, 7);

eq("File \"bs_array_test.res\", line 225, characters 5-12", a$3.slice(0), [
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  7,
  10,
  10
]);

Belt_Array.fill(a$3, -13, 1, 7);

eq("File \"bs_array_test.res\", line 227, characters 5-12", a$3.slice(0), [
  7,
  0,
  1,
  1,
  1,
  1,
  1,
  7,
  10,
  10
]);

Belt_Array.fill(a$3, -13, 12, 7);

eq("File \"bs_array_test.res\", line 229, characters 5-12", a$3.slice(0), Belt_Array.make(10, 7));

Belt_Array.fill(a$3, 0, -1, 2);

eq("File \"bs_array_test.res\", line 231, characters 5-12", a$3.slice(0), Belt_Array.make(10, 7));

let b$1 = [
  1,
  2,
  3
];

Belt_Array.fill(b$1, 0, 0, 0);

eq("File \"bs_array_test.res\", line 234, characters 5-12", b$1, [
  1,
  2,
  3
]);

Belt_Array.fill(b$1, 4, 1, 0);

eq("File \"bs_array_test.res\", line 236, characters 5-12", b$1, [
  1,
  2,
  3
]);

let a0 = Belt_Array.makeBy(10, x => x);

let b0 = Belt_Array.make(10, 3);

Belt_Array.blit(a0, 1, b0, 2, 5);

eq("File \"bs_array_test.res\", line 243, characters 5-12", b0.slice(0), [
  3,
  3,
  1,
  2,
  3,
  4,
  5,
  3,
  3,
  3
]);

Belt_Array.blit(a0, -1, b0, 2, 5);

eq("File \"bs_array_test.res\", line 245, characters 5-12", b0.slice(0), [
  3,
  3,
  9,
  2,
  3,
  4,
  5,
  3,
  3,
  3
]);

Belt_Array.blit(a0, -1, b0, -2, 5);

eq("File \"bs_array_test.res\", line 247, characters 5-12", b0.slice(0), [
  3,
  3,
  9,
  2,
  3,
  4,
  5,
  3,
  9,
  3
]);

Belt_Array.blit(a0, -2, b0, -2, 2);

eq("File \"bs_array_test.res\", line 249, characters 5-12", b0.slice(0), [
  3,
  3,
  9,
  2,
  3,
  4,
  5,
  3,
  8,
  9
]);

Belt_Array.blit(a0, -11, b0, -11, 100);

eq("File \"bs_array_test.res\", line 251, characters 5-12", b0.slice(0), a0);

Belt_Array.blit(a0, -11, b0, -11, 2);

eq("File \"bs_array_test.res\", line 253, characters 5-12", b0.slice(0), a0);

let aa = Belt_Array.makeBy(10, x => x);

Belt_Array.blit(aa, -1, aa, 1, 2);

eq("File \"bs_array_test.res\", line 256, characters 5-12", aa.slice(0), [
  0,
  9,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]);

Belt_Array.blit(aa, -2, aa, 1, 2);

eq("File \"bs_array_test.res\", line 258, characters 5-12", aa.slice(0), [
  0,
  8,
  9,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]);

Belt_Array.blit(aa, -5, aa, 4, 3);

eq("File \"bs_array_test.res\", line 260, characters 5-12", aa.slice(0), [
  0,
  8,
  9,
  3,
  5,
  6,
  7,
  7,
  8,
  9
]);

Belt_Array.blit(aa, 4, aa, 5, 3);

eq("File \"bs_array_test.res\", line 262, characters 5-12", aa.slice(0), [
  0,
  8,
  9,
  3,
  5,
  5,
  6,
  7,
  8,
  9
]);

eq("File \"bs_array_test.res\", line 263, characters 5-12", Belt_Array.make(0, 3), []);

eq("File \"bs_array_test.res\", line 264, characters 5-12", Belt_Array.make(-1, 3), []);

let c = [
  0,
  1,
  2
];

Belt_Array.blit(c, 4, c, 1, 1);

eq("File \"bs_array_test.res\", line 267, characters 5-12", c, [
  0,
  1,
  2
]);

eq("File \"bs_array_test.res\", line 271, characters 5-12", Belt_Array.zip([
  1,
  2,
  3
], [
  2,
  3,
  4,
  1
]), [
  [
    1,
    2
  ],
  [
    2,
    3
  ],
  [
    3,
    4
  ]
]);

eq("File \"bs_array_test.res\", line 272, characters 5-12", Belt_Array.zip([
  2,
  3,
  4,
  1
], [
  1,
  2,
  3
]), [
  [
    2,
    1
  ],
  [
    3,
    2
  ],
  [
    4,
    3
  ]
]);

eq("File \"bs_array_test.res\", line 273, characters 5-12", Belt_Array.zipBy([
  2,
  3,
  4,
  1
], [
  1,
  2,
  3
], (prim0, prim1) => prim0 - prim1 | 0), [
  1,
  1,
  1
]);

eq("File \"bs_array_test.res\", line 274, characters 5-12", Belt_Array.zipBy([
  1,
  2,
  3
], [
  2,
  3,
  4,
  1
], (prim0, prim1) => prim0 - prim1 | 0), Belt_Array.map([
  1,
  1,
  1
], x => -x | 0));

eq("File \"bs_array_test.res\", line 275, characters 5-12", Belt_Array.unzip([
  [
    1,
    2
  ],
  [
    2,
    3
  ],
  [
    3,
    4
  ]
]), [
  [
    1,
    2,
    3
  ],
  [
    2,
    3,
    4
  ]
]);

function sumUsingForEach(xs) {
  let v = {
    contents: 0
  };
  Belt_Array.forEach(xs, x => {
    v.contents = v.contents + x | 0;
  });
  return v.contents;
}

eq("File \"bs_array_test.res\", line 287, characters 5-12", sumUsingForEach([
  0,
  1,
  2,
  3,
  4
]), 10);

b("File \"bs_array_test.res\", line 288, characters 4-11", !Belt_Array.every([
  0,
  1,
  2,
  3,
  4
], x => x > 2));

b("File \"bs_array_test.res\", line 289, characters 4-11", Belt_Array.some([
  1,
  3,
  7,
  8
], x => x % 2 === 0));

b("File \"bs_array_test.res\", line 290, characters 4-11", !Belt_Array.some([
  1,
  3,
  7
], x => x % 2 === 0));

b("File \"bs_array_test.res\", line 291, characters 4-11", !Belt_Array.eq([
  0,
  1
], [1], (prim0, prim1) => prim0 === prim1));

let c$1 = {
  contents: 0
};

b("File \"bs_array_test.res\", line 293, characters 4-11", (Belt_Array.forEachWithIndex([
  1,
  1,
  1
], (i, v) => {
  c$1.contents = (c$1.contents + i | 0) + v | 0;
}), c$1.contents === 6));

function id(loc, x) {
  let u = x.slice(0);
  eq("File \"bs_array_test.res\", line 304, characters 4-11", Belt_Array.reverse(x), (Belt_Array.reverseInPlace(u), u));
}

id("File \"bs_array_test.res\", line 314, characters 5-12", []);

id("File \"bs_array_test.res\", line 315, characters 5-12", [1]);

id("File \"bs_array_test.res\", line 316, characters 5-12", [
  1,
  2
]);

id("File \"bs_array_test.res\", line 317, characters 5-12", [
  1,
  2,
  3
]);

id("File \"bs_array_test.res\", line 318, characters 5-12", [
  1,
  2,
  3,
  4
]);

function every2(xs, ys, x) {
  return Belt_Array.every2(Belt_List.toArray(xs), Belt_List.toArray(ys), x);
}

function some2(xs, ys, x) {
  return Belt_Array.some2(Belt_List.toArray(xs), Belt_List.toArray(ys), x);
}

eq("File \"bs_array_test.res\", line 326, characters 5-12", every2(/* [] */0, {
  hd: 1,
  tl: /* [] */0
}, (x, y) => x > y), true);

eq("File \"bs_array_test.res\", line 327, characters 5-12", every2({
  hd: 2,
  tl: {
    hd: 3,
    tl: /* [] */0
  }
}, {
  hd: 1,
  tl: /* [] */0
}, (x, y) => x > y), true);

eq("File \"bs_array_test.res\", line 328, characters 5-12", every2({
  hd: 2,
  tl: /* [] */0
}, {
  hd: 1,
  tl: /* [] */0
}, (x, y) => x > y), true);

eq("File \"bs_array_test.res\", line 329, characters 5-12", every2({
  hd: 2,
  tl: {
    hd: 3,
    tl: /* [] */0
  }
}, {
  hd: 1,
  tl: {
    hd: 4,
    tl: /* [] */0
  }
}, (x, y) => x > y), false);

eq("File \"bs_array_test.res\", line 330, characters 5-12", every2({
  hd: 2,
  tl: {
    hd: 3,
    tl: /* [] */0
  }
}, {
  hd: 1,
  tl: {
    hd: 0,
    tl: /* [] */0
  }
}, (x, y) => x > y), true);

eq("File \"bs_array_test.res\", line 331, characters 5-12", some2(/* [] */0, {
  hd: 1,
  tl: /* [] */0
}, (x, y) => x > y), false);

eq("File \"bs_array_test.res\", line 332, characters 5-12", some2({
  hd: 2,
  tl: {
    hd: 3,
    tl: /* [] */0
  }
}, {
  hd: 1,
  tl: /* [] */0
}, (x, y) => x > y), true);

eq("File \"bs_array_test.res\", line 333, characters 5-12", some2({
  hd: 2,
  tl: {
    hd: 3,
    tl: /* [] */0
  }
}, {
  hd: 1,
  tl: {
    hd: 4,
    tl: /* [] */0
  }
}, (x, y) => x > y), true);

eq("File \"bs_array_test.res\", line 334, characters 5-12", some2({
  hd: 0,
  tl: {
    hd: 3,
    tl: /* [] */0
  }
}, {
  hd: 1,
  tl: {
    hd: 4,
    tl: /* [] */0
  }
}, (x, y) => x > y), false);

eq("File \"bs_array_test.res\", line 335, characters 5-12", some2({
  hd: 0,
  tl: {
    hd: 3,
    tl: /* [] */0
  }
}, {
  hd: 3,
  tl: {
    hd: 2,
    tl: /* [] */0
  }
}, (x, y) => x > y), true);

eq("File \"bs_array_test.res\", line 339, characters 5-12", Belt_Array.concat([], [
  1,
  2,
  3
]), [
  1,
  2,
  3
]);

eq("File \"bs_array_test.res\", line 340, characters 5-12", Belt_Array.concat([], []), []);

eq("File \"bs_array_test.res\", line 341, characters 5-12", Belt_Array.concat([
  3,
  2
], [
  1,
  2,
  3
]), [
  3,
  2,
  1,
  2,
  3
]);

eq("File \"bs_array_test.res\", line 342, characters 5-12", Belt_Array.concatMany([
  [
    3,
    2
  ],
  [
    1,
    2,
    3
  ]
]), [
  3,
  2,
  1,
  2,
  3
]);

eq("File \"bs_array_test.res\", line 343, characters 5-12", Belt_Array.concatMany([
  [
    3,
    2
  ],
  [
    1,
    2,
    3
  ],
  [],
  [0]
]), [
  3,
  2,
  1,
  2,
  3,
  0
]);

eq("File \"bs_array_test.res\", line 344, characters 5-12", Belt_Array.concatMany([
  [],
  [
    3,
    2
  ],
  [
    1,
    2,
    3
  ],
  [],
  [0]
]), [
  3,
  2,
  1,
  2,
  3,
  0
]);

eq("File \"bs_array_test.res\", line 345, characters 5-12", Belt_Array.concatMany([
  [],
  []
]), []);

b("File \"bs_array_test.res\", line 349, characters 4-11", Belt_Array.cmp([
  1,
  2,
  3
], [
  0,
  1,
  2,
  3
], Primitive_int.compare) < 0);

b("File \"bs_array_test.res\", line 350, characters 4-11", Belt_Array.cmp([
  0,
  1,
  2,
  3
], [
  1,
  2,
  3
], Primitive_int.compare) > 0);

b("File \"bs_array_test.res\", line 351, characters 4-11", Belt_Array.cmp([
  1,
  2,
  3
], [
  0,
  1,
  2
], Primitive_int.compare) > 0);

b("File \"bs_array_test.res\", line 352, characters 4-11", Belt_Array.cmp([
  1,
  2,
  3
], [
  1,
  2,
  3
], Primitive_int.compare) === 0);

b("File \"bs_array_test.res\", line 353, characters 4-11", Belt_Array.cmp([
  1,
  2,
  4
], [
  1,
  2,
  3
], Primitive_int.compare) > 0);

eq("File \"bs_array_test.res\", line 357, characters 5-12", Belt_Array.getBy([
  1,
  2,
  3
], x => x > 1), 2);

eq("File \"bs_array_test.res\", line 358, characters 5-12", Belt_Array.getBy([
  1,
  2,
  3
], x => x > 3), undefined);

eq("File \"bs_array_test.res\", line 362, characters 5-12", Belt_Array.getIndexBy([
  1,
  2,
  3
], x => x > 1), 1);

eq("File \"bs_array_test.res\", line 363, characters 5-12", Belt_Array.getIndexBy([
  1,
  2,
  3
], x => x > 3), undefined);

let arr = [];

arr.push(3);

arr.push(2);

arr.push(1);

eq("File \"bs_array_test.res\", line 371, characters 5-12", arr, [
  3,
  2,
  1
]);

Mt.from_pair_suites("File \"bs_array_test.res\", line 374, characters 20-27", suites.contents);

let A;

let L;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.$$throw = $$throw;
exports.neq = neq;
exports.A = A;
exports.L = L;
exports.push = push;
exports.add = add;
exports.addone = addone;
exports.makeMatrixExn = makeMatrixExn;
exports.sumUsingForEach = sumUsingForEach;
exports.id = id;
/*  Not a pure module */
