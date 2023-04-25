/* eslint-disable react/prop-types */
const Calculator = ({ children }) => (
  <div className="calculator">
    <div className="screen">0</div>
    {children}
  </div>
);

export default Calculator;
