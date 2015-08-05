# Fuzzy Dates

Fuzzy dates module for Histograph.

## Input

One of the following:

- ISO 8601 date
- Year
- ISO 8601 date with error
- Year with error
- Array/range of two years
- Array/range of two ISO 8601 dates

(The first two cases imply that their error is `null`.)

### Error

    {
      date: '1970',
      error: '1m'
    }

- Date: either year or ISO 8601 date
- error units:
  - `d`: day
  - `m`: month
  - `y`: year

## Output

- Array/range of two ISO 8601 date

## TODO

- Create unit tests
- Create JSON schema
  - Date/year
  - error
  - Range
- Create conversion code
- Decide which part of ISO 8601 to use: only yyyy/yyyy-mm-dd, also weeks, or even more?