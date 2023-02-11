import axios from 'axios';
import { useState } from 'react';
import DateTime from './DateTime';

function Weather() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  const apiKey = '165413216546321'; //Your API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setCity('');
    }
  };
  return (
    <>
      <div className="title px-3 d-flex">
        <h1>{data.name},</h1>
        {data.sys ? <h1>{data.sys.country}</h1> : null}
      </div>
      <div className="w-container bg-secondary">
        <img src="../assets/Sunny.svg" alt="sunny" />
        <div className="bottom">
          <div className="date">
            <b>
              Date
              <br />
            </b>
            <DateTime />
          </div>
          <div className="temp">
            <span>Temp</span>
            <br />
            {data.main ? <h4>{data.main.temp}°F</h4> : null}
          </div>
          <div className="description">
            <span>Description</span>
            <br />
            {data.weather ? <b>{data.weather[0].description}</b> : null}
          </div>
          <div className="main">
            <span>Main</span>
            <br />
            {data.main ? <h4>{data.main.feels_like}</h4> : null}
          </div>
          <div className="pressure">
            <span>Pressure</span>
            <br />
            {data.main ? <h4>{data.main.pressure}psa</h4> : null}
          </div>
          <div className="humidity">
            <span>Humidity</span>
            <br />
            {data.main ? <h4>{data.main.humidity}%</h4> : null}
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={searchLocation}
          className="form-control"
          placeholder="Enter Location"
          aria-label="Enter Location"
          aria-describedby="button-addon2"
        />
      </div>
    </>
  );
}
export default Weather;
