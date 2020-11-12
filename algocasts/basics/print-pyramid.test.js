const { a } = require('./print-pyramid');

describe('print-pyramid', () => {
  describe('A', () => {
    test('Calling a with `5` prints out 5 statements', () => {
      a(5);

      expect(console.log.mock.calls.length).toEqual(5);
    });

    test('Calling a with 6 prints out the correct values', () => {
      a(6);

      // expect(console.log.mock.calls[0][0]).toEqual('     #     ');
      expect(console.log.mock.calls[1][0]).toEqual('    ###    ');
      expect(console.log.mock.calls[2][0]).toEqual('   #####   ');
      expect(console.log.mock.calls[3][0]).toEqual('  #######  ');
      expect(console.log.mock.calls[4][0]).toEqual(' ######### ');
      expect(console.log.mock.calls[5][0]).toEqual('###########');
    });

    beforeEach(() => {
      jest.spyOn(console, 'log');
    });

    afterEach(() => {
      console.log.mockRestore();
    });
  })
  
  // describe('B', () => {
  //   test('Calling a with `5` prints out 5 statements', () => {
  //     b(5);

  //     expect(console.log.mock.calls.length).toEqual(5);
  //   });

  //   test('Calling a with 6 prints out the correct values', () => {
  //     b(6);

  //     expect(console.log.mock.calls[0][0]).toEqual('#     ');
  //     expect(console.log.mock.calls[1][0]).toEqual('##    ');
  //     expect(console.log.mock.calls[2][0]).toEqual('###   ');
  //     expect(console.log.mock.calls[3][0]).toEqual('####  ');
  //     expect(console.log.mock.calls[4][0]).toEqual('##### ');
  //     expect(console.log.mock.calls[5][0]).toEqual('######');
  //   });

  //   beforeEach(() => {
  //     jest.spyOn(console, 'log');
  //   });

  //   afterEach(() => {
  //     console.log.mockRestore();
  //   });
  // })
})