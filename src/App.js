import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
