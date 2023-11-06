import WeatherWidget from "./components/widgets/WeatherWidget/WeatherWidget";
import WidgetContainer from "./components/widgets/WidgetContainer";

function App() {
  return (
    <div className="App">
      <WidgetContainer>
        <WeatherWidget />
      </WidgetContainer>
    </div>
  );
}

export default App;
