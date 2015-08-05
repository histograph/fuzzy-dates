var assert = require('assert');
var fuzzyDates = require('../index');

describe('fuzzy-dates', function() {
   describe('convert', function() {
     it('Should do het!', function() {
       var input1 = {
         date: '2010',
         significance: '1y'
       };

       var output1 = [
         '2009-01-01',
         '2011-12-31'
       ];

       assert.equal(fuzzyDates.convert(input1), output1);
     });
   });
});
