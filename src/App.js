import trxLogo from './images/trx-logo.png';
import './App.css';
import PebbleButton from './components/PebbleButton/PebbleButton.js';
import RockWallet from './components/RockWallet/RockWallet.js';
import colorCode from './helper/color.js';
import text from './helper/text.js';
import RockUserProfile from './components/RockUserProfile/RockUserProfile';

function App() {
  let wallerId = 'ct0001';

  return (
    <div className="App">
      <header className="App-header">
        
        <RockUserProfile coinName={text.trx} wallerId={wallerId}></RockUserProfile>
        <RockWallet coinName={text.trx} wallerId={wallerId}></RockWallet>

        <PebbleButton buttonName={text.buy} style={{backgroundColor: colorCode.green}}></PebbleButton>
        <PebbleButton buttonName={text.sell} style={{backgroundColor: colorCode.red}}></PebbleButton>
        <img src={trxLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
