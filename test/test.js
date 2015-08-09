var assert = require('assert');
var fuzzyDates = require('../index');
var testDates = require('./testDates.js');

describe('fuzzy-dates', function() {
   describe('convert', function() {
     testDates.forEach(function(date) {
       var output = fuzzyDates.convert(date.input);
       it('Should convert ' + JSON.stringify(date.input) + ' to ' + JSON.stringify(output), function() {
         assert.deepEqual(output, date.output);
       });
     });
   });
});
