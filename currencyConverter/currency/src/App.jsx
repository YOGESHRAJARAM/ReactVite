import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
   const[amount , setamount] = useState(1);
   const[fromCurrency, setFromCurrency] = useState("USD");
   const[toCurrency, setToCurrency]= useState("INR");
   const[convertedAmount,setconvertedAmount] = useState(null);
   const [exchangerate,setexchangerate] = useState(null);

   useEffect(() =>{
      const getExchangeRate = async ()=>{
        try{
          let url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
          const responce = await axios.get(url);
          setexchangerate(responce.data.rates[toCurrency]);
  
        }catch(error){
          console.log(error);
        }
      };
      getExchangeRate();
    
   },[fromCurrency, toCurrency]);

   useEffect(()=>{
    if(exchangerate !== null){
      setconvertedAmount((amount * exchangerate).toFixed(2))
    }
   },[amount,exchangerate]);

   const handleAmountChanger = (e) =>{
    const value = parseFloat(e.target.value);
    setamount(isNaN(value) ? 0: value);
   }
   const handleFromCurrency = (e)=>{
    setFromCurrency(e.target.value);
   }
   const handletoCurrency = (e)=>{
    setToCurrency(e.target.value);
   }

  return (
    <>
     <div className="currency-converter">
       <div className="box"></div>
       <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor='amt'>Amount</label>
            <input type='number' name='' id='amt' value={amount} onChange={handleAmountChanger}></input>
          </div>
          <div className="input-container">
             <label htmlFor="fromCurrency">from Currency:</label>
             <select id='fromCurrency' onChange={handleFromCurrency} value={fromCurrency}>
               <option value="USD">USD - United States Dollar</option>
               <option value="EUR">EUR - Euro</option>
               <option value="GBP">GBP - British Pound Sterling</option>
               <option value="JPY">JPY - Japanese Yen</option>
               <option value="AUD">AUD - Australian Dollar</option>
               <option value="CAD">CAD - Canadian Dollar</option>
               <option value="INR">INR - Indian Rupee</option>
               <option value="BRL">BRL - Brazilian Real</option>
             </select>
          </div>
          <div className="input-container">
             <label htmlFor="toCurrency">to Currency:</label>
             <select id='toCurrency' onChange={handletoCurrency} value={toCurrency}>
               <option value="USD">USD - United States Dollar</option>
               <option value="EUR">EUR - Euro</option>
               <option value="GBP">GBP - British Pound Sterling</option>
               <option value="JPY">JPY - Japanese Yen</option>
               <option value="AUD">AUD - Australian Dollar</option>
               <option value="CAD">CAD - Canadian Dollar</option>
               <option value="INR">INR - Indian Rupee</option>
               <option value="BRL">BRL - Brazilian Real</option>
             </select>
          </div>
          <div className="result">
            <p> {amount} {toCurrency} is equal to {convertedAmount} {fromCurrency}</p>
          </div> 
          
       </div>

     </div>
    </>
  )
}

export default App
