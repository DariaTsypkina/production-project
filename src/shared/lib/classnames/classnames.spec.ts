import { classnames } from "./classnames";

describe("classnames", () => {
  it("with first param", () => {
    expect(classnames("someClass")).toBe("someClass");
  });

  it("with second param", () => {
    expect(classnames("someClass", ["test"])).toBe("someClass test");
  });

  it("with mods", () => {
    expect(
      classnames("someClass", ["test"], { hello: true, world: false })
    ).toBe("someClass test hello");
  });
});

