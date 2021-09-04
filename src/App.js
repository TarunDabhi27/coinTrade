import './App.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import About from './Pages/About.js';
import Home from './Pages/Home.js';
import PebbleLabel from './components/PebbleLabel/PebbleLabel.js';
import colorCode from './helper/color.js';
import text from './helper/text.js';
import Login from './Pages/Login';

function App() {

  return (
    <div className="App">
      <Router>
        <Link to='/coinTrade'><PebbleLabel labelName={text.home} style={{color: colorCode.green}}></PebbleLabel></Link>
        <Link to='/'><PebbleLabel labelName={text.home} style={{color: colorCode.green}}></PebbleLabel></Link>
        <Link to='/about'><PebbleLabel labelName={text.about} style={{color: colorCode.green}}></PebbleLabel></Link>
        <Link to='/login'><PebbleLabel labelName={text.login} style={{color: colorCode.green}}></PebbleLabel></Link>

        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
