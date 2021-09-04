import text from '../../helper/text';
import './PebbleTextBox.css';

function PebbleTextBox(props) {
  let style = props.style;
  let name = props.name;
  
  function handleClick(e) {
    
      props.buttonAction && props.buttonAction.buttonAction(props.buttonName);

  }
  
  return (
    <div className="PebbleTextBox" onClick={handleClick}>
       <input className="PebbleTextBox" placeholder={name}/>
    </div>
  );
}

export default PebbleTextBox;
