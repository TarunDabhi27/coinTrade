import './PebbleLabel.css';

function PebbleLabel(props) {
  let style = props.style;
  return (
    <div className="PebbleLabel" style={style}>
       {props.labelName}
    </div>
  );
}

export default PebbleLabel;
