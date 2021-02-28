//3. sblmnya agar bisa pakai state,import dr react
// import {useState} from 'react';
import {Switch, Route} from 'react-router-dom'

// component
// import Header from "./components/Header"
// import Counter from "./components/Counter"
// import CounterClass from './components/CounterClass';
// import Biodata from './components/Biodata';
// import Forms from './components/Forms';
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import Gallery from './pages/Gallery'
import Register from './pages/Register'
import Login from './pages/Login'

import './App.css';

//function component
function App() {
  //1.gunakan use state agar komponen punya data
  //2.utk bikin state, buat nama variable datanya: cth: [number], const [number, setNumber] artinya const di desctructure. setnumber adalah method utk merubah variablenya, data const [number, setNumber]/ valuenya didapat dari = useState(0), (0 ini nilai data awalnya)
  // const [number, setNumber] = useState(0); 
  // console.log(number);
  // console.log(setNumber);
  // const [nama, setNama] = useState('thoriq');
  // function increase() {
  //   setNumber(number + 1)
  // }
  
  // function decrease() {
  //   if (number > 0){

  //     setNumber(number - 1)
  //   }
  // }

  // const changeName = () => {
  //   setNama("Impact Byte")
  // }
 
  return (
    <div className="App">
      <Navbar />

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profilex/:name">
          <Profile />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
    // </Router>
  );
}


export default App;
