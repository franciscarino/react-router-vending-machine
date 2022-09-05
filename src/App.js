import logo from './logo.svg';
import './App.css';
import VendingMachine from "./VendingMachine";
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < Nav />
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
