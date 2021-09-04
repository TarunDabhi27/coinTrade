import './PebbleButton.css';

function PebbleButton(props) {
  let style = props.style;
  return (
    <div className="PebbleButton" style={style}>
       {props.buttonName}
    </div>
  );
}

export default PebbleButton;
