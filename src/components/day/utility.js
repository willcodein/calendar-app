import Moment from 'moment';

export function getOverflowDates(date, underOver) {
  if (date.format('dddd') === 'Monday') return false;
  let mutableDate = date.clone();
  let overflow = [];
  switch(underOver) {
    case 'under':
      let yesterday = Moment(mutableDate.startOf('month')).subtract(1, 'days');
      while (yesterday.format('dddd') !== 'Monday') {
        overflow.push(yesterday.format('D'));
        yesterday = Moment(yesterday).subtract(1, 'days');
      }
      break;
    case 'over':
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
