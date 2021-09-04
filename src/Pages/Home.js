import trxLogo from '../images/trx-logo.png';
import '../App.css';
import PebbleButton from '../components/PebbleButton/PebbleButton.js';
import RockWallet from '../components/RockWallet/RockWallet.js';
import colorCode from '../helper/color.js';
import text from '../helper/text.js';
import RockUserProfile from '../components/RockUserProfile/RockUserProfile';

function Home() {
  let wallerId = 'ct0001';

  function buttonAction(){
    alert(`This feature is under development`);
  }

  
    return (
      <div className="PebbleLabel">
         <header className="App-header">
        
        <RockUserProfile coinName={text.trx} wallerId={wallerId}></RockUserProfile>
        <RockWallet coinName={text.trx} wallerId={wallerId}></RockWallet>

        <PebbleButton buttonName={text.buy} style={{backgroundColor: colorCode.green}} buttonAction={{buttonAction}}></PebbleButton>
        <PebbleButton buttonName={text.sell} style={{backgroundColor: colorCode.red}} buttonAction={{buttonAction}}></PebbleButton>
        <img src={trxLogo} className="App-logo" alt="logo" />
      </header>
      </div>
    );
  }
  
  export default Home;
  