import { BmiPipe } from './bmi.pipe';

describe('BmiPipe', () => {
  it('create an instance', () => {
    const pipe = new BmiPipe();
    expect(pipe).toBeTruthy();
  });
});
