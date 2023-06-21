import './App.css';
import Login from './login/login';

const logo = require('./logo.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
