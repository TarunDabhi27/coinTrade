import colorCode from '../../helper/color';
import text from '../../helper/text';
import PebbleButton from '../PebbleButton/PebbleButton';
import './PebbleLabel.css';

function PebbleLabel(props) {
  let style = props.style;
  let isCopyEnabled = props.copy;

  return (
    <div className="PebbleLabel" style={style}>
       {props.labelName}
       
    </div>
  );
}

export default PebbleLabel;
