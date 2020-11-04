import firstMissingPositive from "../../code/sort/leet41";

test("firstMissingPositive", () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
});
test("firstMissingPositive1", () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
});
test("firstMissingPositive2", () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
});
test("firstMissingPositive3", () => {
  expect(firstMissingPositive([1, 2, 3, 4])).toBe(5);
});
