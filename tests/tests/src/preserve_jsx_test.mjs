// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Primitive_option from "rescript/lib/es6/Primitive_option.js";
import * as JsxRuntime from "react/jsx-runtime";

let React = {};

let ReactDOM = {};

function Preserve_jsx_test$Icon(props) {
  return <strong/>;
}

let Icon = {
  make: Preserve_jsx_test$Icon
};

let _single_element_child = <div>
<h1>
{"Hello, world!"}
</h1>
</div>;

let _multiple_element_children = <div>
<h1>
{"Hello, world!"}
</h1>
<Preserve_jsx_test$Icon/>
</div>;

let _single_element_fragment = <>
{Primitive_option.some(<input/>)}
</>;

let _multiple_element_fragment = <>
<input type={"text"}/>
<input type={"number"}/>
</>;

let _unary_element_with_props = <input className={"foo"} type={"text"}/>;

let _container_element_with_props_and_children = <div className={"foo"} title={"foo"}>
{"Hello, world!"}
</div>;

let baseProps = {
  className: "foo",
  title: "foo"
};

let newrecord = {...baseProps};

let _unary_element_with_spread_props = <input {...newrecord}  type={"text"}/>;

let newrecord$1 = {...baseProps};

let _container_with_spread_props = <div {...newrecord$1}  title={"barry"} className={"barry"}>
{"Hello, world!"}
<input type={"text"}/>
</div>;

let baseChildren = [
  <span>
  {"Hello, world!"}
  </span>,
  <span>
  {"Hello, world!"}
  </span>
];

let _container_with_spread_children = <div className={"barry"} title={"barry"}>
{baseChildren}
</div>;

let newrecord$2 = {...baseProps};

let _container_with_spread_props_and_children = <div {...newrecord$2}  title={"barry"} className={"barry"}>
{baseChildren}
</div>;

let newrecord$3 = {...baseProps};

let _unary_element_with_spread_props_keyed = <input key={"barry-key"}  {...newrecord$3}  type={"text"}/>;

let newrecord$4 = {...baseProps};

let _container_with_spread_props_keyed = <div key={"barry-key"}  {...newrecord$4}  title={"barry"} className={"barry"}>
{"Hello, world!"}
<input type={"text"}/>
</div>;

let _unary_element_with_only_spread_props = <input {...baseProps} />;

function QueryClientProvider(props) { return props.children }
;

let A = {};

function Preserve_jsx_test$B(props) {
  return <p>
  {"Hello, world!"}
  </p>;
}

let B = {
  make: Preserve_jsx_test$B
};

let _external_component_with_children = <QueryClientProvider>
<strong/>
<Preserve_jsx_test$B/>
</QueryClientProvider>;

export {
  React,
  ReactDOM,
  Icon,
  _single_element_child,
  _multiple_element_children,
  _single_element_fragment,
  _multiple_element_fragment,
  _unary_element_with_props,
  _container_element_with_props_and_children,
  baseProps,
  _unary_element_with_spread_props,
  _container_with_spread_props,
  baseChildren,
  _container_with_spread_children,
  _container_with_spread_props_and_children,
  _unary_element_with_spread_props_keyed,
  _container_with_spread_props_keyed,
  _unary_element_with_only_spread_props,
  A,
  B,
  _external_component_with_children,
}
/* _single_element_child Not a pure module */
