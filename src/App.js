import logo from "./logo.svg";
import "./App.css";
import backgroundImage1 from "./assets/space2.png";
import WaterWave from "react-water-wave";

function App() {
  let renderFirstold = () => {
    return (
      <WaterWave
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          background: `url(${backgroundImage1}) no-repeat center center fixed`,
        }}
        dropRadius={85}
        perturbance={0.005}
        interactive={true}
      ></WaterWave>
    );
  };

  return <div className="App">{renderFirstold()}</div>;
}

export default App;
