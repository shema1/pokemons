import moment from "moment"


const fillDays = (date) => {
  let days = [];
  let firstDayInMonth = moment(date).date(1);
  let lastDayInMonth = moment(date).endOf("month");
  let daysInMonth = moment(date).daysInMonth();
  let lastDayInPrevMonth = moment(firstDayInMonth).add(-1, "day");
  let daysInNextMonth = moment(date)
    .add(1, "M")
    .startOf("month")
    .format("d");
  let count = 1;

  if (firstDayInMonth.format("d") > 1) {
    for (let i = 1; i <= moment(firstDayInMonth).format("d") - 1; i++) {
      days.unshift(lastDayInPrevMonth);
      lastDayInPrevMonth = moment(lastDayInPrevMonth).add(-1, "day");
    }
  }

  while (count !== daysInMonth + 1) {
    days.push(moment(firstDayInMonth));
    firstDayInMonth = moment(firstDayInMonth).add(1, "day");
    count++;
  }

  if (lastDayInMonth.format("d") !== "0") {
    for (let i = 1; i <= 8 - daysInNextMonth; i++) {
      days.push(firstDayInMonth);
      firstDayInMonth = moment(firstDayInMonth).add(1, "day");
    }
  }

  return days
}

export default fillDays