import './RockUserProfile.css';
import wallet from '../../database/wallet.js';
import PebbleLabel from '../PebbleLabel/PebbleLabel.js';
import colorCode from '../../helper/color';
import text from '../../helper/text.js';

function RockUserProfile(props) {
  let style = props.style;
  let walletDetails = wallet.filter( el => el.wallerId === props.wallerId);
  let userName = walletDetails[0].userName;
  
  return (
    <div className="RockUserProfile" style={style}>
       <PebbleLabel labelName={text.welcome + ': ' + userName} style={{color: colorCode.green}}></PebbleLabel>
    </div>
  );
}

export default RockUserProfile;
