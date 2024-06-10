const func = require('./q8')


  describe('ch1-q8', function() {

    it('throws an error when null/undefined/empty matrix', function() {
      expect(() => func(null)).toThrow('invalid matrix');
      expect(() => func(undefined)).toThrow('invalid matrix');
    });

    it('returns matrix unchanged with 1,1 matrix', function() {
      let matrix = [[0]];
      expect(func(matrix)).toEqual(matrix);
    });

    [
      {
        matrix: [
          [1, 0],
          [1, 1]
        ],
        expected: [
          [0, 0],
          [1, 0]
        ]
      },
      {
        matrix: [
          [1, 0, 3],
          [4, 5, 6],
          [7, 0, 9]
        ],
        expected: [
          [0, 0, 0],
          [4, 0, 6],
          [0, 0, 0]
        ]
      },
      {
        matrix: [
          [ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9, 10, 11, 12],
          [13, 14, 15, 16]
        ],
        expected: [
          [ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9, 10, 11, 12],
          [13, 14, 15, 16]
        ]
      },
      {
        matrix: [
          [ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9,  0, 11, 12],
          [13, 14, 15,  0],
          [17, 18, 19, 20]
        ],
        expected: [
          [ 1,  0,  3,  0],
          [ 5,  0,  7,  0],
          [ 0,  0,  0,  0],
          [ 0,  0,  0,  0],
          [17,  0, 19,  0]
        ]
      }
    ].forEach(context => {

      it(`zeros a ${context.matrix.length}x${context.matrix[0].length} matrix correctly`, function() {
        expect(func(context.matrix)).toEqual(context.expected);
      });

    });

  });
