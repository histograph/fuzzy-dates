# Fuzzy Dates

[![Build Status](https://travis-ci.org/histograph/fuzzy-dates.svg)](https://travis-ci.org/histograph/fuzzy-dates)

Fuzzy dates module for [Histograph](https://github.com/histograph/histograph).

## Input

One of the following:

- ISO 8601 date string (`YYYY-MM-DD`):

`"2007-06-12"`

- Single year (string or number):

`1920`, `"1995"`

- Object with a ISO 8601 date string and an error specification:

```js
{
  date: '1962-10-10',
  error: '1M'
}
```

- Object with a year string/number and an error specification:

```js
{
  date: '1970',
  error: '5y'
}
```

- String with year and error in years, of the form `:year±:error`:

`"1995±5"`

- Array of two years

```js
[
  1930,
  1940
]
```

- Array of two ISO 8601 date strings

```js
[
  "1912-03-04",
  "1912-03-26"
]
```

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
var fd = require('fuzzy-dates');

var a = fd.convert('1995');

console.log(a); // => ["1995-01-01", "1995-12-31"]
```