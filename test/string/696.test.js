import countBinarySubstrings from "../../code/string/696";

test("00110011具有相同数量的连续1和0子串数量", () => {
  expect(countBinarySubstrings("00110011")).toBe(6);
});

test("0001100111010011具有相同数量的连续1和0子串数量", () => {
  expect(countBinarySubstrings("0001100111010011")).toBe(11);
});
