import CurrentWeather from "./currentWeather";
import Forcast from "./forcast";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <CurrentWeather />
        <Forcast />
      </div>
      <footer>
        This project was coded by <strong>Anne Helene Nergård</strong> and is
        open sourced on
        <a href="https://github.com/Annekaka/weather-app-react"> Github</a>.
        Hosted on
        <a href="https://magnificent-strudel-e35b8f.netlify.app"> Netlify</a>
      </footer>
    </div>
  );
}

export default App;
