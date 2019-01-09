export class CustomDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  dayOfWeek() {
    const days = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
    const yearDifference = Math.abs(this.year - 1800);
    const monthDifference = Math.abs(this.month);
    const dayDifference = Math.abs(this.day - 1);
    let totalDayDifference = dayDifference;
    switch(monthDifference) {
      case 11:
        totalDayDifference += 30;
      case 10:
        totalDayDifference += 31;
      case 9:
        totalDayDifference += 30;
      case 8:
        totalDayDifference += 31;
      case 7:
        totalDayDifference += 31;
      case 6:
        totalDayDifference += 30;
      case 5:
        totalDayDifference += 31;
      case 4:
        totalDayDifference += 30;
      case 3:
        totalDayDifference += 31;
      case 2:
        totalDayDifference += 28;
        if((this.year % 4 === 0) && (this.year % 100 !== 0 || this.year % 400 === 0)) {
          totalDayDifference += 1;
        }
      case 1:
        totalDayDifference += 31;
        break;
      default:
       break;
    }
    totalDayDifference += yearDifference * 365;
    totalDayDifference += Math.floor(yearDifference/4);
    totalDayDifference -= Math.floor(yearDifference/100);
    totalDayDifference += Math.floor((yearDifference+200)/400);
    let dayOfWeek = totalDayDifference % 7;
    return days[dayOfWeek];
  }
}
