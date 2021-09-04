import './PebbleButton.css';

function PebbleButton(props) {
  let style = props.style;
  
  function handleClick(e) {
    
      props.buttonAction && props.buttonAction.buttonAction(props.buttonName);

  }
  
  return (
    <div className="PebbleButton" style={style} onClick={handleClick}>
       {props.buttonName}
    </div>
  );
}

export default PebbleButton;
