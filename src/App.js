import React,{useState} from "react"
import axios from "axios"
import './App.css'



const App = () => {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  
  const fetchData = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=93a4dac886afb1e3369e9799e77b1b2c`;
                
    axios.get(url)
      .then((response) => {
        if (response.data.cod === 200) {
          setData(response.data);
          console.log(response.data);
        } else {
          alert('Zadejte platné jméno města!');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetchData();
      setLocation('');
    }
  };

    


  return (
    <div className="App"> 
          <div className="container">
              <div className="top">   
                  <div className="location">
                      <input
                            className="input"
                            value ={location}
                            onChange={event => setLocation(event.target.value)}
                            onKeyPress={searchLocation}
                            placeholder="Enter Location"
                            type="text"
                            />
    
                  </div>

                  <div className="exit">
                    <div className="temp">
                      <p className="loc">{data.name}</p>
                            <img usr="./assets/clear.png"/>
                      {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
                    </div>             
                      <div className="botton">
                        <div className="feels">
                        {data.main ? <p>{Math.round(data.main.feels_like)} °C</p> : null} 
                        </div>
                        <div className="humidity">
                        {data.main ? <p>{data.main.humidity} %</p> : null}
                        </div>
                        <div className="wind">
                        {data.wind ? <p>{data.wind.speed} km/h</p> : null}                       
                      </div>
                  </div>
                    
                  </div>
              </div>
          </div>
    </div>
  
  )
}

export default App
