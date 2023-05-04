import operate from './operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  it('subtract two numbers', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });
  it('multiply two numbers', () => {
    expect(operate(3, 2, 'x')).toBe('6');
  });
  it('divides two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });
  it('returns "Can\'t divide by 0." when dividing by zero', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('returns "Can\'t find modulo as can\'t divide by 0." when finding modulo by zero', () => {
    expect(operate(6, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error when the operation is unknown', () => {
    expect(() => operate(1, 2, '&')).toThrowError("Unknown operation '&'");
  });
});
