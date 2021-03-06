"use strict";
const Parser = require("../src/index");

describe("constantDeclarator", () => {
  it("without init", () => {
    expect(
      Parser.parse("A = this", parser => parser.constantDeclarator())
    ).toEqual({
      type: "CONSTANT_DECLARATOR",
      name: {
        type: "IDENTIFIER",
        value: "A"
      },
      dimensions: [],
      init: {
        type: "THIS"
      }
    });
  });

  it("one square", () => {
    expect(
      Parser.parse("A[] = this", parser => parser.constantDeclarator())
    ).toEqual({
      type: "CONSTANT_DECLARATOR",
      name: {
        type: "IDENTIFIER",
        value: "A"
      },
      dimensions: [
        {
          type: "DIMENSION"
        }
      ],
      init: {
        type: "THIS"
      }
    });
  });

  it("multiple squares", () => {
    expect(
      Parser.parse("A[][] = this", parser => parser.constantDeclarator())
    ).toEqual({
      type: "CONSTANT_DECLARATOR",
      name: {
        type: "IDENTIFIER",
        value: "A"
      },
      dimensions: [
        {
          type: "DIMENSION"
        },
        {
          type: "DIMENSION"
        }
      ],
      init: {
        type: "THIS"
      }
    });
  });
});
