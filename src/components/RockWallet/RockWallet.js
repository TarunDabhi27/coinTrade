import './RockWallet.css';
import wallet from '../../database/wallet.js';
import PebbleLabel from '../PebbleLabel/PebbleLabel.js';
import colorCode from '../../helper/color';

function RockWallet(props) {
  let style = props.style;
  let walletDetails = wallet.filter( el => el.wallerId === props.wallerId);
  let coinBalance = walletDetails[0].trxBalance;
  
  return (
    <div className="RockWallet" style={style}>
       <PebbleLabel labelName={props.coinName + ': ' + coinBalance} style={{color: colorCode.green}}></PebbleLabel>
    </div>
  );
}

export default RockWallet;
