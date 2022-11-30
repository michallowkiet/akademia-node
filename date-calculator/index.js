const calculateNewDate = (date, days) => {
  const moment = require("moment");

  return moment(date).add(days, "day").format("DD-MM-YYYY");
};

const calculateDifference = (startDate, endDate) => {
  const moment = require("moment");
  const date1 = moment(startDate);
  const date2 = moment(endDate);

  return date2.diff(date1, "days") + " days";
};

module.exports = { calculateNewDate, calculateDifference };
