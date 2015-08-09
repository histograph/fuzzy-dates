var util = require('util');
var moment = require('moment');
var validator = require('is-my-json-valid/require');
var validate = validator('fuzzy-dates.schema.json');

module.exports.schema = require('./fuzzy-dates.schema.json');

module.exports.convert = function(fd) {
  if (!validate(fd))
    throw util.format('Invalid Fuzzy Date: %s', JSON.stringify(fd));

  var c = fd.constructor;
  if (c === String) {
    if (fd.indexOf('-') > -1) {
      return [
        fd,
        fd
      ];
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
    var match = /(\d+)(\w)/.exec(fd.error);
    var errorValue = parseInt(match[1]);
    var errorUnit = match[2];

    if (c === String && fd.date.indexOf('-') > -1) {
      return [
        moment(fd.date).subtract(errorValue, errorUnit).format('YYYY-MM-DD'),
        moment(fd.date).add(errorValue, errorUnit).format('YYYY-MM-DD')
      ];
    } else {
      var year = parseInt(fd.date);
      return yearJanDecRange(year - errorValue, year + errorValue);
    }
  }
};

function yearJanDecRange(year1, year2) {
  return [
    year1 + '-01-01',
    year2 + '-12-31'
  ];
}
