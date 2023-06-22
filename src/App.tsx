import './App.css';
import Login from './login/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const logo = require('./logo.png');

export const errorStyle = {
  background: 'red',
  color: 'white',
  BackgroundColor: 'white'
};

export function ShowError(error : string){
  toast.error(error, {
      style: errorStyle,
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Login></Login>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
