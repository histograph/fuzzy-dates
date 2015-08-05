var assert = require('assert');
var fuzzyDates = require('../index');
var testDates = require('./testDates.js');

describe('fuzzy-dates', function() {
   describe('convert', function() {
     testDates.forEach(function(date) {
       it('Should convert ' + JSON.stringify(date.input), function() {
         assert.equal(fuzzyDates.convert(date.input), date.output);
       });
     });
   });
});
