import canPlaceFlowers from "../../code/array/leet605";

test("canPlaceFlowers", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});

test("canPlaceFlowers", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});
