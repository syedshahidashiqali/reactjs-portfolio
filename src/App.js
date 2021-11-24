import './App.css';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import Staff from './Components/Staff/Staff';
import Summary from './Components/Summary/Summary';

function App() {
  return (
    <div className="app p-r">
      <NavBar />
      <Intro />
      <Staff />
      <Summary />
    </div>
  );
}

export default App;
