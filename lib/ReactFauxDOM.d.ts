import {ReactElement} from "react";
/**
 * This is just a template.
 * If the source does not export function at top level,
 * you can skip the declare namespace and export what's inside directly.
 */
declare namespace ReactFauxDOM {
  interface ZElement extends Element {
    toReact(): ReactElement
  }
  interface Window {
    getComputedStyles(node: Element): string;
  }
  function createElement(nodeName: string): Element
  function createElementNS(ns: string, nodeName: string): Element
  function compareDocumentPosition(): number
}

export = ReactFauxDOM;
