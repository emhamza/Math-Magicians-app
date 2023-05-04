import calculate from './calculate';

describe('calculate', () => {
  it('should return an object with total, next and operation keys when passed the AC button name', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({ total: 0, next: null, operation: null });
  });
  it('should concatenate the button name to the next key when passed a number button name', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '2');
    expect(result).toEqual({ total: '5', next: '32', operation: '+' });
  });
  it('should return an object with next and total keys', () => {
    const result = calculate({}, '5');
    expect(result).toEqual({ total: null, next: '5' });
  });
});
