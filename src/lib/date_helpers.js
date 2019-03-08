import moment from "moment";
let currentLocale =
  document.getElementsByTagName("html")[0].getAttribute("lang") || "de";
moment.locale(currentLocale);

export function getSelectedDay(daySelector, selectedDay, excludeWeekends) {
  let today = moment(selectedDay);
  if (!excludeWeekends) {
    if (daySelector === "selectedDay") {
      return today;
    } else if (daySelector === "dayBeforeSelectedDay") {
      return today.subtract(1, "day");
    }
    return today.add(1, "day");
  } else {
    if (today.day() === 5) {
      // it's friday - show thursday, friday and monday
      if (daySelector === "selectedDay") {
        return today;
      } else if (daySelector === "dayAfterSelectedDay") {
        return today.add(2, "days");
      }
      return today.subtract(2, "day");
    } else if (today.day() === 6) {
      // it's saturday - show thursday, friday and monday
      if (daySelector === "selectedDay") {
        return today.subtract(1, "days");
      } else if (daySelector === "dayAfterSelectedDay") {
        return today.add(2, "days");
      }
      return today.subtract(2, "day");
    } else if (today.day() === 0) {
      // it's sunday - show thursday, friday and monday
      if (daySelector === "selectedDay") {
        return today.subtract(2, "days");
      } else if (daySelector === "dayAfterSelectedDay") {
        return today.add(1, "day");
      }
      return today.subtract(3, "days");
    } else if (today.day() === 1) {
      // it's monday - show friday, monday and tuesday
      if (daySelector === "selectedDay") {
        return today;
      } else if (daySelector === "dayAfterSelectedDay") {
        return today.add(1, "day");
      }
      return today.subtract(3, "days");
    } else {
      return getSelectedDay(daySelector, selectedDay, false);
    }
  }
}
