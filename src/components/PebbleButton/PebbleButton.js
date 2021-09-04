import text from '../../helper/text';
import './PebbleButton.css';

function PebbleButton(props) {
  let style = props.style;
  
  function handleClick(e) {
    
    // if(props.buttonName === text.deposit || props.buttonName === text.withdraw){
      props.buttonAction && props.buttonAction.buttonAction(props.buttonName);
//    }
  }
  
  return (
    <div className="PebbleButton" style={style} onClick={handleClick}>
       {props.buttonName}
    </div>
  );
}

export default PebbleButton;
