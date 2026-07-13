import {
  getCurrentWeather,
  getHourlyForecast,
} from "../../services/weatherService";
import styles from "./Landing.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

function Landing({ setWeatherData }) {

  const handleSearch = async (city) => {

try{

const current=await getCurrentWeather(city);

const forecast=await getHourlyForecast(city);

setWeatherData({

current,

forecast,

loading:false,

error:null

});

}

catch{

setWeatherData({

current:null,

forecast:null,

loading:false,

error:"City not found"

});

}

};

  return (
    <section className={styles.landing}>

      <Logo />

      <h2>Good Morning 👋</h2>

      <p>What city would you like to explore today?</p>

      <SearchBar onSearch={handleSearch} />

    </section>
  );
}

export default Landing;