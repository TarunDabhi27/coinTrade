import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import About from './Pages/About.js';
import Home from './Pages/Home.js';
import PebbleLabel from './components/PebbleLabel/PebbleLabel.js';
import colorCode from './helper/color.js';
import text from './helper/text.js';
import Login from './Pages/Login';
import homeLogo from './images/home-icon.png';
import loginLogo from './images/login-icon.png';
import profileLogo from './images/profile-icon.png';

function App() {

  return (
    <div className="App">
      <Router>
        <div style={{position: 'absolute', bottom: 0, backgroundColor: colorCode.green}}>
          {/* <Link to='/'><PebbleLabel labelName={text.home} style={{color: colorCode.green, float: 'left'}}></PebbleLabel></Link> */}
          <Link to='/'><img src={homeLogo} style={{height: 32, width:32, float: 'left', paddingLeft: 30, paddingRight: 30}} alt="logo"/></Link>
          <Link to='/login'><img src={loginLogo} style={{height: 32, width:32, float: 'left', paddingLeft: 30, paddingRight: 30}} alt="logo"/></Link>
          <Link to='/about'><img src={profileLogo} style={{height: 32, width:32, float: 'left', paddingLeft: 30, paddingRight: 30}} alt="logo"/></Link>
          <Link to='/'><img src={homeLogo} style={{height: 32, width:32, float: 'left', paddingLeft: 30, paddingRight: 30}} alt="logo"/></Link>
          <Link to='/login'><img src={loginLogo} style={{height: 32, width:32, float: 'left', paddingLeft: 30, paddingRight: 30}} alt="logo"/></Link>
          {/* <Link to='/about'><PebbleLabel labelName={text.about} style={{color: colorCode.green, float: 'left'}}></PebbleLabel></Link> */}
          {/* <Link to='/login'><PebbleLabel labelName={text.login} style={{color: colorCode.green, float: 'left'}}></PebbleLabel></Link> */}
        </div>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home}/>
        <Route path="/coinTrade" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
