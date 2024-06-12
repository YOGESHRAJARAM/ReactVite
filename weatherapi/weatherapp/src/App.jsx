import { useEffect, useState } from 'react'
import './App.css'
import PropTypes from "prop-types"
import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear.png";
import cloudIcon from "./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rainy.png";
import windIcon from "./assets/wind.png";
import snowIcon from "./assets/snowflake.png";
import humidityIcon from "./assets/humidity.png";

function WeatherDetails({icon,temp,city,country,lat,log,Humidity,Wind}){
  return(
    <>
      <div className="image">
        <img src={icon}></img>
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
            <span className='lat'>latitude</span><span> {lat}</span>
        </div>
        <div>
            <span className='log'>longitude</span><span> {log}</span>
        </div>
      </div>
      <div className="data-container">
          <div className="element">
             <img width={50} src={humidityIcon}></img>
             <div className="data">
               <div className="humidity-persent">{Humidity}%</div>
               <div className="text">Humidity</div>
             </div>
          </div>
          <div className="element">
             <img width={50} src={windIcon}></img>
             <div className="data">
               <div className="wind-persent">{Wind}Km/h</div>
               <div className="text">Wind Speed </div>
             </div>
          </div>
      </div>
     
    </>
  );
};

WeatherDetails.propTypes={
  icon:PropTypes.string.isRequired,
  temp:PropTypes.number.isRequired,
  city:PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  Humidity:PropTypes.number.isRequired,
  lat:PropTypes.number.isRequired,
  log:PropTypes.number.isRequired,
  Wind:PropTypes.number.isRequired,
}

function App() {
const [Text, setText] = useState("Theni")
const [icon, setIcon]= useState(clearIcon)
const[temp,settemp]=useState(0)
const [city,setcity]=useState("")
const[country,setcountry]=useState("IN")
const[lat,setlat]=useState(0)
const[log,setlog]=useState(0)
const[Humidity,sethumidity] = useState(0);
const [Wind,setWind]=useState(0)
const[cityNotFound,SetCityNotFount] = useState(false);
const [Loading,setLoading] = useState(false);
const [Error, setError] = useState(null);

const weatherIconMap = {
  "01d":clearIcon,
  "01n":clearIcon,
  "02d":cloudIcon,
  "02n":cloudIcon,
  "03d":drizzleIcon,
  "03n":drizzleIcon,
  "04n":drizzleIcon,
  "04d":drizzleIcon,
  "09d":rainIcon,
  "09n":rainIcon,
  "10d":rainIcon,
  "10n":rainIcon,
  "13d":snowIcon,
  "13n":snowIcon,
};

const search = async () => {
  setLoading(true);
  setError(null);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${Text}&appid=3d45e5a14253673a2f9ad071d66d9d25&units=Metric`;
  try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    if(data.cod === "404"){
      console.error("City not found");
      SetCityNotFount(true);
      setLoading(false);
      return;
    }

    setWind(data.wind.speed)
    sethumidity(data.main.humidity)
    settemp(data.main.temp)
    setcity(Text)
    setlat(data.coord.lon)
    setlog(data.coord.lat)
    setcountry(data.sys.country)
    const weathericonCode = data.weather[0].icon;
    setIcon( weatherIconMap[weathericonCode] || clearIcon);
    SetCityNotFount(false);
    // console.log(data.weather)

  }catch(error){
    
    console.error("an arror occurred", error.message);
    setError("Error while fetching data Please select city");
  
  }finally{
    setLoading(false)
  }
  
}

const handleCity = (e) =>{
  setText(e.target.value);
};
const handleKey = (e) =>{
  if(e.key === "Enter"){
    search();
  }
}

useEffect(function(){
  search();
},[]);

  return (
    <>
      <div className="container">
          <div className="input-container">
              <input type="text" className='cityInput' placeholder='Seach City' value={Text} onChange={handleCity} onKeyDown={handleKey}></input>
              <div className="search-icon"><img onClick={()=>search()} width={20} src={searchIcon} alt='search icon'></img> </div>
          </div>
          { !Loading && !cityNotFound &&  <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} Humidity={Humidity} Wind={Wind}/>}
           { Loading && <div className="loading-message">Loading.....</div>} 
            {Error &&<div className="error-message">{Error}</div>}
            {cityNotFound && <div className="city-not-found">City Not Found</div> }

          <p className="copyright">
            Designed by <span>Yogesh Rajaram</span>

          </p>
      </div>
      
    </>
  )
}

export default App
