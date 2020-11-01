import maximumGap from "../../code/sort/leet164";

test("maximumGap", () => {
  expect(maximumGap([3, 6, 9, 1])).toBe(3);
});

test("maximumGap", () => {
  expect(maximumGap([10])).toBe(0);
});

test("maximumGap", () => {
  expect(maximumGap([3, 4, 9, 1])).toBe(5);
});
