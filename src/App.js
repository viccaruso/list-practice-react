import './App.css';
import { polarFlavors } from './polar-data';
import PolarList from './PolarList';
import OregonCitiesList from './OregonCitiesList';
import { cities } from './cities-data';
import PetList from './PetList';
import { pets } from './pets-data';
import BooksList from './BooksList';
import { books } from './books-data';
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
      <div>
        <h1>Pets</h1>
        <PetList pets={pets} />
      </div>
      <div>
        <h1>Books</h1>
        <BooksList books={books} />
      </div>
    </div>
  );
}

export default App;
