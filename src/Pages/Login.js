import PebbleButton from "../components/PebbleButton/PebbleButton.js";
import PebbleLabel from "../components/PebbleLabel/PebbleLabel.js";
import PebbleTextBox from "../components/PebbleTextBox/PebbleTextBox.js";
import colorCode from "../helper/color.js";
import text from "../helper/text.js";

function Login() {
    function buttonAction() {
        alert(text.underDevelopment);
    }

    return (
        <div className="PebbleLabel">
            <header className="App-header">
                <PebbleLabel labelName='Login Page' style={{ color: colorCode.green }}></PebbleLabel>
                <PebbleTextBox name={text.username}></PebbleTextBox>
                <PebbleTextBox name={text.password}></PebbleTextBox>
                <PebbleButton buttonName={text.login} style={{ backgroundColor: colorCode.green, align: 'center' }} buttonAction={{ buttonAction }}></PebbleButton>
            </header>
        </div>
    );
}

export default Login;
