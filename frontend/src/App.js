// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/home';
import HospitalInfo, { UpdateForm } from './components/hospitalInfo';
import AmbulanceInfo from './components/ambulanceInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/hospitalInfo' element = {<HospitalInfo/>}/>
        <Route path='/ambulanceInfo' element = {<AmbulanceInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
