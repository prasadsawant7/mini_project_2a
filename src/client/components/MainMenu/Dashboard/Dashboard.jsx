import "./Dashboard.css";
import { FcCalendar } from "react-icons/fc";
import { TiWeatherCloudy } from "react-icons/ti";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const todayDate = new Date();
  let date = todayDate.getDate();
  let month = monthNames[todayDate.getMonth()];
  let year = todayDate.getFullYear();

  const [username, setUsername] = useState(null);
  const [address, setAddress] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  const [pres, setPres] = useState(null);
  const [vis, setVis] = useState(null);
  const [humid, setHumid] = useState(null);
  const [position, setPosition] = useState({
    lat: null,
    long: null,
  });
  const API_KEY = "71cd18b2a3d04d50acb110655233103";

  async function getLatLong() {
    function success(data) {
      setPosition({
        lat: data.coords.latitude,
        long: data.coords.longitude,
      });
    }
    let userLocation = navigator.geolocation;
    if (userLocation) {
      userLocation.getCurrentPosition(success);
    } else {
      return "The geolocation API is not supported by your browser.";
    }
  }

  const capitalizeEveryFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    setUsername("Darrell");
    getLatLong();
    async function getWeather() {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${position.lat},${position.long}&aqi=yes`
      );
      const data = await res.json();
      setAddress(`${data?.location?.name}, ${data?.location?.region}`);
      setWeather(capitalizeEveryFirstLetter(data?.current?.condition?.text));
      setWeatherIcon(data?.current?.condition?.icon);
      setTemp(data?.current?.temp_c);
      setPres(data?.current?.pressure_mb);
      setVis(data?.current?.vis_km);
      setHumid(data?.current?.humidity);
    }
    getWeather();
  }, [weather]);

  return (
    <div className="dashboard">
      <div className="userdata">
        <div className="greet-user">
          <p>Welcome back, {username}!</p>
        </div>
        <div className="date">
          <div className="date-icon">
            <FcCalendar id="calendar" />
          </div>
          <div className="date-text">{`${date} ${month}, ${year}`}</div>
        </div>
        <div className="analytics">
          <div className="row1">
            <div className="col1" id="weather">
              {/* {weather === "Partly Cloudy" ? (
                <div className="cloudy">{weather}</div>
              ) : weather === "Patchy light rain" ? (
                <div className="rainy">Rainy</div>
              ) : (
                <div className="cold">Cold</div>
              )} */}

              <div className="cloudy">
                <div className="weather-header">
                  <div className="weather-icon">
                    {weatherIcon ? (
                      <img src={`https:${weatherIcon}`} alt="Weather" />
                    ) : (
                      <TiWeatherCloudy />
                    )}
                  </div>
                  <div className="weather-text">
                    <div className="weather-text-head">{address}</div>
                    <div className="weather-text-subhead">
                      What's the weather
                    </div>
                  </div>
                </div>
                <div className="weather-details">
                  <div className="temparature">{temp}&deg;C</div>
                  <div className="weather">{weather}</div>
                </div>
                <div className="weather-other-details">
                  <div className="pressure">
                    <div className="head">Pressure</div>
                    <div className="data">{pres}mb</div>
                  </div>
                  <div className="visibility">
                    <div className="head">Visibility</div>
                    <div className="data">{vis}km</div>
                  </div>
                  <div className="humidity">
                    <div className="head">Humidity</div>
                    <div className="data">{humid}%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col2" id="airquality">
              Cold
            </div>
          </div>
          <div className="row2">
            <div className="col1">Col 1</div>
            <div className="col2">Col 2</div>
            <div className="col3">Col 3</div>
          </div>
        </div>
      </div>
      <div className="recommendations">Recommends</div>
    </div>
  );
}
