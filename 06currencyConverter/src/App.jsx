import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setCurrencies([...Object.keys(data.rates)]);
        setConversionRate(data.rates[toCurrency]);
      });
  }, [toCurrency]);

  const handleConvert = (e) => {
    e.preventDefault();
    setConvertedAmount((amount * conversionRate).toFixed(2));
  };

  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <form className="converter-form" onSubmit={handleConvert}>
        <div className="form-group">
          <label className="form-label">Enter Amount</label>
          <input 
            type="number" 
            className="form-input" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <div className="form-section">
            <label className="form-label">From</label>
            <select 
              className="form-select" 
              value={fromCurrency} 
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="form-section">
            <label className="form-label">To</label>
            <select 
              className="form-select" 
              value={toCurrency} 
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="convert-button">Convert</button>
      </form>

      {convertedAmount > 0 && (
        <div className="result">
          <h3>Converted Amount: {convertedAmount} {toCurrency}</h3>
        </div>
      )}
    </div>
  );
};

export default App;