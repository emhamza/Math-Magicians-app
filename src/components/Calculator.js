import React, { useState } from 'react';
import ButtonBox from './ButtonBox';
import Button from './Button';
import calculate from '../logics/calculate';

const btnValues = [
  [{ id: 'AC' }, { id: '+/-' }, { id: '%' }, { id: '÷' }],
  [{ id: '7' }, { id: '8' }, { id: '9' }, { id: 'x' }],
  [{ id: '4' }, { id: '5' }, { id: '6' }, { id: '-' }],
  [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '+' }],
  [{ id: '0' }, { id: '.' }, { id: '=' }],
];

const Calculator = () => {
  const [obj, setObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleEvent = (btn) => setObj(calculate(obj, btn));

  return (
    <>
      <h3>Lets do some Math!</h3>
      <div className="calculator">
        <div className="screen">
          <p>
            {obj?.total}
            {' '}
            {obj?.operation}
            {' '}
            {obj?.next}
          </p>
        </div>
        <ButtonBox>
          {btnValues.flat().map((btn) => (
            <Button
              onClick={() => handleEvent(btn.id)}
              value={btn.id}
              key={btn.id}
            />
          ))}
        </ButtonBox>
      </div>
    </>
  );
};

export default Calculator;
