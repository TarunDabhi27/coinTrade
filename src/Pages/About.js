import PebbleLabel from "../components/PebbleLabel/PebbleLabel.js";
import colorCode from "../helper/color.js";

function About() {
  
  return (
    <div className="PebbleLabel">
      <PebbleLabel labelName='Powered by Coin Trade' style={{color: colorCode.green}}></PebbleLabel>
      <PebbleLabel labelName='Version 1.0.0' style={{color: colorCode.green}}></PebbleLabel>
    </div>
  );
}

export default About;
