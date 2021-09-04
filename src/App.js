import logo from './logo.svg';
import './App.css';
import PebbleButton from './components/PebbleButton/PebbleButton.js';
import colorCode from './helper/color.js';
import text from './helper/text.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PebbleButton buttonName={text.buy} style={{backgroundColor: colorCode.red}}></PebbleButton>
        <PebbleButton buttonName={text.sell} style={{backgroundColor: colorCode.green}}></PebbleButton>
      </header>
    </div>
  );
}

export default App;
