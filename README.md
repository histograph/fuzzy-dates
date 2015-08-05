# Fuzzy Dates

Fuzzy dates module for Histograph.

## Input

One of the following:

- `xsd:date`
- Jaartal
- `xsd:date` with significance
- Year with significance
- Array/range of two years
- Array/range of two `xsd:date`s

(The first two cases imply that their significance is `null`.)

### Significance

    {
      date: '1970',
      significance: '1m'
    }

- Date: either year or `xsd:data`
- Significance units:
  - `d`: day
  - `m`: month
  - `y`: year

## Output

- Array/range of two `xsd:date`s

## TODO

- Create unit tests
- Create JSON schema
  - Date/year
  - Significance
  - Range
- Create conversion code