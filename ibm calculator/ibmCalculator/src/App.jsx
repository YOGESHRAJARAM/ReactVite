
import { useState } from 'react'
import './App.css'

function App() {
 const [height,setheight]=useState("");
 const [weight,setweight]=useState("");
 const [bmi,setbmi]=useState(null);
 const [bmistatus,setbmistatus]=useState("");
 const [errormessage,seterrormessage]=useState("");


 const calculatebmi = () => {
   const isvalidheight = /^\d+$/.test(height);
   const isvalidweight = /^\d+$/.test(weight);
   
   if(isvalidheight && isvalidweight){
      const heighinMeter = height / 100;
      const bmiValue = weight / (heighinMeter * heighinMeter);
      setbmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5){
        setbmistatus("underweight");
      }
      else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setbmistatus("Normal weight");
      }
      else if(bmiValue >= 25 && bmiValue <29.9){
        setbmistatus("Overweight");
      }
      else{
        setbmistatus("Obese")
      }

   }
   else{
    setbmi(null);
    setbmistatus("");
    seterrormessage("please enter valid numeric value");
   }

 }

  return (
    <>
    <div className="bmi-calculator">
       <div className="box ">
          
       </div>
       <div className="data">
            <h1>BMI Calculator</h1>
            {errormessage && <p className='error'>{errormessage}</p>}
            <div className="input-container">
                <lable htmlFor='height'>Height(cm):</lable>
                <input type='text' id='height' value={height} onChange={(e)=>{setheight(e.target.value)}}></input>
            </div>
            <div className="input-container">
                <lable htmlFor='weight'>weight (kg):</lable>
                <input type='text' id='Weight' value={weight} onChange={(e)=>{setweight(e.target.value)}}></input>
            </div>
            <button onClick={calculatebmi}>Calculator BMI</button><button onClick={()=>{
              setheight("");
              setweight("");
              setbmi(null);
              seterrormessage("");
              setbmistatus("");

            }}>Clear</button>
            { bmi !== null && <div className="result">
              <p>Your BMI is : {bmi}</p>
              <p>Status : {bmistatus}</p>
            </div>}
       </div>
    </div>
    </>
  )
}

export default App
