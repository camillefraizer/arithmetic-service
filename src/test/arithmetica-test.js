const { add } = require("../arithmetica");

test("2 + 3 is equal to 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("209 + 3000 is equal to 5", () => {
    expect(add(209, 3000)).toBe(3209);
});

test("0 + 3000 is equal to 5", () => {
    expect(add(0, 3000)).toBe(3000);
});
