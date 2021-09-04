import text from '../../helper/text';
import './PebbleTextBox.css';

function PebbleTextBox(props) {
  let style = props.style;
  
  function handleClick(e) {
    
      props.buttonAction && props.buttonAction.buttonAction(props.buttonName);

  }
  
  return (
    <div className="PebbleTextBox" onClick={handleClick}>
       <input className="PebbleTextBox"/>
    </div>
  );
}

export default PebbleTextBox;
