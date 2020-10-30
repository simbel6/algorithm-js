import letterCombinations from "../../code/array/leet17";
// console.log(letterCombinations("234"));
test("letterComb:2", () => {
    expect(letterCombinations("2")).toEqual([
      "a",
      "b",
      "c",
    ]);
  });
test("letterComb:23", () => {
  expect(letterCombinations("23")).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});

test("letterComb:234", () => {
  expect(letterCombinations("234")).toEqual([
    "adg",
    "adh",
    "adi",
    "aeg",
    "aeh",
    "aei",
    "afg",
    "afh",
    "afi",
    "bdg",
    "bdh",
    "bdi",
    "beg",
    "beh",
    "bei",
    "bfg",
    "bfh",
    "bfi",
    "cdg",
    "cdh",
    "cdi",
    "ceg",
    "ceh",
    "cei",
    "cfg",
    "cfh",
    "cfi",
  ]);
});
