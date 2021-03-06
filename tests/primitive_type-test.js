"use strict";
const Parser = require("../src/index");

describe("primitiveType", () => {
  it("native", () => {
    expect(Parser.parse("boolean", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "boolean"
    });
  });

  it("char", () => {
    expect(Parser.parse("char", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "char"
    });
  });

  it("byte", () => {
    expect(Parser.parse("byte", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "byte"
    });
  });

  it("short", () => {
    expect(Parser.parse("short", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "short"
    });
  });

  it("int", () => {
    expect(Parser.parse("int", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "int"
    });
  });

  it("long", () => {
    expect(Parser.parse("long", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "long"
    });
  });

  it("float", () => {
    expect(Parser.parse("float", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "float"
    });
  });

  it("double", () => {
    expect(Parser.parse("double", parser => parser.primitiveType())).toEqual({
      type: "PRIMITIVE_TYPE",
      value: "double"
    });
  });
});
