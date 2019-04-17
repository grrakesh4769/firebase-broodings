import {helper} from '@ember/component/helper';

export function formatTimestamp(timestamp/*, hash*/) {
  if (timestamp != null && timestamp != undefined) {
    return moment(parseInt(timestamp, 10)).format('DD MMM YYYY hh:mm A'); //No I18N
  } else {
    return timestamp;
  }
}

export default helper(formatTimestamp);
