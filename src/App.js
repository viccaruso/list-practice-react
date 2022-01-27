import logo from './logo.svg';
import './App.css';
import { polarFlavors } from './polar-data';
import PolarList from './PolarList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <PolarList flavors={polarFlavors} />
    </div>
  );
}

export default App;
