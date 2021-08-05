import formatDate from ".";

describe("formatDate", () => {
  it("should render string as expected", () => {
    const date = new Date(
      "Tue Aug 3 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
    );
    const res = formatDate(date);

    expect(res).toBe("2021-08-03");
  });
});
