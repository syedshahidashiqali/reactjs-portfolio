import './App.css';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import Staff from './Components/Staff/Staff';

function App() {
  return (
    <div className="app p-r">
      <NavBar />
      <Intro />
      <Staff />
    </div>
  );
}

export default App;
