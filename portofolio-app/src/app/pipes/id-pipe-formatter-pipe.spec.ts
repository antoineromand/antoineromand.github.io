import {IdFormatterPipe} from './id-pipe-formatter-pipe';

describe('IdFormatterPipe', () => {
  it('create an instance', () => {
    const pipe: IdFormatterPipe = new IdFormatterPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(3)).toEqual('03');
    expect(pipe.transform(4) === '4').toBeFalsy();
    expect(pipe.transform(11) === '11').toBeTruthy();
  });
});
