module.exports = [
  {
    input: 1995,
    output: [
      '1995-01-01',
      '1995-12-31',
    ]
  },


  {
    input: -500,
    output: [
      '-500-01-01',
      '-500-12-31'
    ]
  },


  {
    input: '1982-07-13',
    output: [
      '1982-07-13',
      '1982-07-13'
    ]
  },


  {
    input: [
      1910,
      1920
    ],
    output: [
      '1910-01-01',
      '1920-12-31'
    ]
  },


  {
    input: {
      date: '2010',
      error: '1y'
    },
    output: [
      '2009-01-01',
      '2011-12-31'
    ]
  },


  {
    input: {
      date: 1915,
      error: '3y'
    },
    output: [
      '1912-01-01',
      '1918-12-31'
    ]
  },


  {
    input: {
      date: '1950-12-12',
      error: '3M'
    },
    output: [
      '1950-09-12',
      '1951-03-12'
    ]
  },


  {
    input:  [
      '1980',
      '1985'
    ],
    output: [
      '1980-01-01',
      '1985-12-31'
    ]
  },


  {
    input: [
      1200,
      1500
    ],
    output: [
      '1200-01-01',
      '1500-12-31'
    ]
  },


  {
    input:  [
      '1920-10-12',
      '1925-10-12'
    ],
    output: [
      '1920-10-12',
      '1925-10-12'
    ]
  }
];
