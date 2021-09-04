import './RockWallet.css';
import wallet from '../../database/wallet.js';
import PebbleLabel from '../PebbleLabel/PebbleLabel.js';
import colorCode from '../../helper/color';
import text from '../../helper/text.js';
import PebbleButton from '../PebbleButton/PebbleButton';
import { useState } from 'react';
import token from '../../database/token.js';

function RockWallet(props) {
  let style = props.style;
  let walletDetails = wallet.filter( el => el.wallerId === props.wallerId);
  let coinBalance = walletDetails[0].trxBalance;
  let [isCopy, setIsCopy] = useState(false);

  function buttonAction(val){
    console.log(val);
    if(val === text.copy){
      setIsCopy(false);
      navigator.clipboard.writeText(token.trxToken);
      alert(`Token has been copied!`);
    }
    if(val === text.deposit){
      setIsCopy(true);
    }
  }

  return (
    <div className="RockWallet" style={style}>
       <PebbleLabel labelName={props.coinName + ': ' + coinBalance} style={{color: colorCode.green}}></PebbleLabel>
       <PebbleButton buttonName={text.deposit} style={{backgroundColor: colorCode.green}} buttonAction={{buttonAction}}></PebbleButton>
       {isCopy ? <PebbleButton buttonName={text.copy} style={{backgroundColor: colorCode.green}} buttonAction={{buttonAction}}></PebbleButton> : ''}
       <PebbleButton buttonName={text.withdraw} style={{backgroundColor: colorCode.red}} buttonAction={{buttonAction}}></PebbleButton>
    </div>
  );
}

export default RockWallet;
