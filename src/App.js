import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
  [{ id: 'clear', label: 'C' }, { id: 'negate', label: '+/-' }, { id: 'percent', label: '%' }, { id: 'divide', label: '÷' }],
  [{ id: '7', label: '7' }, { id: '8', label: '8' }, { id: '9', label: '9' }, { id: 'multiply', label: 'x' }],
  [{ id: '4', label: '4' }, { id: '5', label: '5' }, { id: '6', label: '6' }, { id: 'subtract', label: '-' }],
  [{ id: '1', label: '1' }, { id: '2', label: '2' }, { id: '3', label: '3' }, { id: 'add', label: '+' }],
  [{ id: '0', label: '0' }, { id: '.', label: '.' }, { id: 'equals', label: '=' }],
];

function App() {
  return (
    <div>
      <Calculator>
        <ButtonBox>
          {btnValues.flat().map((btn) => (
            <Button
              value={btn.label}
              key={btn.id}
            />
          ))}
        </ButtonBox>
      </Calculator>
    </div>
  );
}

export default App;
