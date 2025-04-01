import Form from './components/Form/Form';
import OpenSource from './components/OpenSource/OpenSource';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="weather__title">Weather</h1>
        <h2 className="weather__subtitle">Select a city</h2>
      </div>
      <Form defaultCity="New York" />
      <OpenSource />
    </div>
  );
}

export default App;
