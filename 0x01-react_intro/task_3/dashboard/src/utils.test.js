import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Test for getFullYear
test("returns current year", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getLatestNotification
test("returns right notification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
