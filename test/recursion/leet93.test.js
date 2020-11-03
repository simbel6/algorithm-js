import restoreIpAddresses from "../../code/recursion/leet93";

test("restoreIpAddresses0", () => {
  expect(restoreIpAddresses("25525511135")).toEqual([
    "255.255.11.135",
    "255.255.111.35",
  ]);
});

test("restoreIpAddresses1", () => {
  expect(restoreIpAddresses("0000")).toEqual(["0.0.0.0"]);
});
test("restoreIpAddresses2", () => {
  expect(restoreIpAddresses("010010")).toEqual(["0.10.0.10", "0.100.1.0"]);
});
test("restoreIpAddresses3", () => {
  expect(restoreIpAddresses("101023")).toEqual([
    "1.0.10.23",
    "1.0.102.3",
    "10.1.0.23",
    "10.10.2.3",
    "101.0.2.3",
  ]);
});
