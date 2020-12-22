const func = require('./q9')
describe('ch1-q9:', function () {

  it('throws an error when either string is null/undefined/empty', function () {
    expect(() => func(null, 'abc')).toThrow('invalid input');
    expect(() => func('abc', undefined)).toThrow('invalid input');
    expect(() => func('', 'abc')).toThrow('invalid input');
  });

  it('returns false when strings are different lengths', function () {
    expect(func('abc', 'defg')).toBe(false);
    expect(func('abcd', 'def')).toBe(false);
  });

  describe('rotations of a long string', function () {

    let str = 'a b c d e f g h i j k l m n o p q r s t u v x y z 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
      reverseStr = str.split('').reverse().join('');

    for (let i = 1; i < str.length; i += 12) {
      let rStr = str.substring(i) + str.substring(0, i);

      it(`returns true for rotated string ${rStr}`, function () {
        expect(func(rStr, str)).toBe(true);
      });

    }

    for (let i = 1; i < str.length; i += 12) {
      let rStr = str.substring(i) + reverseStr.substring(0, i);

      it(`returns false for non-rotated string ${rStr}`, function () {
        expect(func(rStr, str)).toBe(false);
      });

    }

  });

});