import { CustomDate } from "./../src/date.js";

describe('CustomDate', function() {
  it('should create a date object given user input', function() {
    let date = new CustomDate(1945, 8, 2);
    expect(date.year).toEqual(1945);
    expect(date.month).toEqual(8);
    expect(date.day).toEqual(2);
  });

  it('should calculate day of the week', function() {
    let date = new CustomDate(1945, 8, 2);
    const day = date.dayOfWeek();
    expect(day).toEqual("Sunday");
  });
});
