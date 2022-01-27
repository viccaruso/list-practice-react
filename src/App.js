import logo from './logo.svg';
import './App.css';
import { polarFlavors } from './polar-data';
import PolarList from './PolarList';
import OregonCitiesList from './OregonCitiesList';
import { cities } from './cities-data';
// import your arrays here

function App() {
  return (
    <div className="App">
      <div>
        <h1>Polar Flavors</h1>
        <PolarList flavors={polarFlavors} />
      </div>
      <div>
        <h1>Cities in Oregon</h1>
        <OregonCitiesList cities={cities} />
      </div>
    </div>
  );
}

export default App;
