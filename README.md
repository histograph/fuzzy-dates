# Fuzzy Dates

[![Build Status](https://travis-ci.org/histograph/fuzzy-dates.svg)](https://travis-ci.org/histograph/fuzzy-dates)

Fuzzy dates module for [Histograph](https://github.com/histograph/histograph).

## Input

One of the following:

- ISO 8601 date (`YYYY-MM-DD`, for example `2007-06-12`)
- Year (string or number)
- ISO 8601 date with error specification
- Year with error specification
- A year ± error in years (`1995±5`)
- Array of two years
- Array of two ISO 8601 dates

### Error specification

```js
{
  date: '1970',
  error: '1M'
}
```

- Date: either a year or an ISO 8601 date
- error units:
  - `d`: day
  - `M`: month
  - `y`: year

Fuzzy Dates uses [Moment.js time shorthand keys](http://momentjs.com/docs/#/manipulating/add/) (currently only days, months and years).

## Output

- Array of two ISO 8601 dates

### Example

Input:

```js
{
  year: 1915,
  error: '3y'
}
```

Output:

```
[
  '1912-01-01',
  '1918-12-31'
]
```

See [`test/testDates.js`](test/testDates.js) for more examples, or run `npm test`.

## Installation

    npm install --save histograph/fuzzy-dates

## Usage

```js
var fd = require('fuzzy-dates);

var a = fd.convert('1995');

console.log(a);
// ["1995-01-01", "1995-12-31"]
```
