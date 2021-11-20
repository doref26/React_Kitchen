import logo from './logo.svg';
import './App.css';
import FCRecipe from './FunctionalComps/FCP';
import MyKitchen from './ClassComps/CCKitchen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Recipes<br />
          Recipes made:

        </p>

        
        <p>
          <MyKitchen />
        </p>

      </header>
    </div>
  );
}

export default App;
