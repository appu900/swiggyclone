import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';
import HelpPage from './pages/HelpPage';
import Precart from './pages/Precart';
import Offer from './pages/Offer';
import Payment from './pages/Payment';
import Resturant from './pages/Resturant';
import { Provider } from 'react-redux';
import store from './Store/store';
import Test from './pages/Test';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<StartingPage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/Search' element={<Searchpage/>}/>
        <Route path='/help' element={<HelpPage/>}/>
        <Route path='/precart' element={<Precart/>}/>
        <Route path='/offer' element={<Offer/>} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/resturants' element={<Resturant/>}/>
        <Route path='/test' element={<Test/>}/>

      </Routes>
      </Provider>
      
     </div> 
  );
}

export default App;
