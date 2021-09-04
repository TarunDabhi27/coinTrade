import './PebbleButton.css';

function PebbleButton(props) {
  let style = props.style;
  
  function handleClick(e) {
    alert(`${props.buttonName} order is under development`);
  }
  
  return (
    <div className="PebbleButton" style={style} onClick={handleClick}>
       {props.buttonName}
    </div>
  );
}

export default PebbleButton;
