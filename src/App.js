import './App.css';
import NavMenu from './components/Nav';
import Home from './components/HomePage';
import AboutPage from './components/About';


function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Home></Home>
      <AboutPage></AboutPage>
    </div>
  );
}

export default App;
