import './App.css';
import NavMenu from './components/Nav';
import Home from './components/HomePage';
import Counter from './components/CountDown';
import About from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Home></Home>
      <Counter></Counter>
      <About></About>

    </div>
  );
}

export default App;
