var util = require('util');
var moment = require('moment');
var validator = require('is-my-json-valid/require');
var validate = validator('fuzzy-dates.schema.json');

module.exports.schema = require('./fuzzy-dates.schema.json');

module.exports.convert = function(fd) {
  var match;
  var year;
  var errorValue;

  if (!validate(fd))
    throw util.format('Invalid Fuzzy Date: %s', JSON.stringify(fd));

  var c = fd.constructor;
  if (c === String) {
    if (isIso8601(fd)) {
      return [
        fd,
        fd
      ];
    } else if (fd.indexOf('±') > -1) {
      match = /(-?\d+)±(\d+)/.exec(fd);
      year = parseInt(match[1]);
      errorValue = parseInt(match[2]);
      return yearJanDecRange(year - errorValue, year + errorValue);
    } else {
      return yearJanDecRange(fd, fd);
    }
  } else if (c === Number) {
    return yearJanDecRange(fd, fd);
  } else if (c === Array) {
    c = fd[0].constructor;
    if (c === String) {
      if (fd[0].length === 4) {
        return yearJanDecRange(fd[0], fd[1]);
      } else {
        return fd;
      }
    } else {
      return yearJanDecRange(fd[0], fd[1]);
    }
  } else if (c === Object) {
    c = fd.date.constructor;
    match = /(-?\d+)(\w)/.exec(fd.error);
    errorValue = parseInt(match[1]);
    var errorUnit = match[2];

    if (c === String && isIso8601(fd.date)) {
      return [
        moment(fd.date).subtract(errorValue, errorUnit).format('YYYY-MM-DD'),
        moment(fd.date).add(errorValue, errorUnit).format('YYYY-MM-DD')
      ];
    } else {
      year = parseInt(fd.date);
      return yearJanDecRange(year - errorValue, year + errorValue);
    }
  }
};

function isIso8601(str) {
  return (str.match(/-/g) || []).length >= 2;
}

function yearJanDecRange(year1, year2) {
  return [
    year1 + '-01-01',
    year2 + '-12-31'
  ];
}
