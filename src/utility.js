import Moment from 'moment';

export function getOverflowDates(date, underOver) {
  let mutableDate = date.clone();
  let overflow = [];
  switch(underOver) {
    case "under":
      let yesterday = Moment(mutableDate.startOf('month')).subtract(1, 'days');
      while (yesterday.format('dddd') !== 'Sunday') {
        overflow.push(yesterday.format('D'));
        yesterday = Moment(yesterday).subtract(1, 'days');
      }
      break;
    case "over":
      let tomorrow = Moment(mutableDate.endOf('month')).add(1, 'days');
      while (tomorrow.format('dddd') !== 'Monday') {
        overflow.push(tomorrow.format('D'));
        tomorrow = Moment(tomorrow).add(1, 'days');
      }
      break;
    default:
      return false
  }
  overflow.sort();
  return overflow;
}

export function monthChecker(increment, currentMonth, day, date) {
  var newMonth, newYear, newDay;
  let dateClone = date.clone();
  switch(increment) {
    case -1:
      newMonth = (Number(currentMonth) + increment === -1 ? 11 : Number(currentMonth) + increment)
      newYear = newMonth === 11 ? -1 : 0;
      newDay = day > dateClone.subtract(1, 'month').daysInMonth() ? -1 : 0;
      break;
    case 1:
      newMonth = (Number(currentMonth) + increment === 12 ? 0 : Number(currentMonth) + increment)
      newYear = newMonth === 0 ? 1 : 0;
      newDay = day > dateClone.add(1, 'month').daysInMonth() ? -1 : 0;
      break;
    default:
      newMonth = currentMonth;
      newYear = 0;
      newDay = 0;
  }
  let results = {
    month: newMonth,
    year: newYear,
    day: Number(day) + newDay
  }
  return results;
}
