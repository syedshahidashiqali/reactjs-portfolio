import './App.css';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import Staff from './Components/Staff/Staff';
import Summary from './Components/Summary/Summary';
import {useState, useEffect} from "react"

function App() {
  
  const bgImgArr = [
    "https://preview.colorlib.com/theme/portech/images/xbg_1.jpg.pagespeed.ic.tSj0cU8YHv.webp",
    "https://preview.colorlib.com/theme/portech/images/xbg_2.jpg.pagespeed.ic.38jO__TVtA.webp"
  ];
  
  const [bgImg,setBgImg] = useState(bgImgArr[0]);

  setTimeout(() => {
    if(bgImg == bgImgArr[0]){
      setBgImg(bgImgArr[1])
    }else {
      setBgImg(bgImgArr[0])
    }
  }, 3000)

  return (
    <div className="app p-r" style={{backgroundImage: `url(${bgImg})`, transition: "all 1s ease-in"}}>
      <NavBar />
      <Intro />
      <Staff />
      <Summary />
    </div>
  );
}

export default App;
