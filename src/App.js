import Header from './components/Header';
import SaleBanner from './components/SaleBanner';
import MainSlide from './components/MainSlide';
import Health from './components/Health';
import Items from './components/Items';
import Brand from './components/Brand';
import Membership from './components/Membership';
import FooterTop from './components/FooterTop';
import FooterBottom from './components/FooterBottom';
/* import join from './pages/Join';
import Detail from './pages/Detail'; */


/* style */
import './style/reset.css'
import './style/App.css';
import './style/Header.css';
import './style/SaleBanner.css';
import './style/MainSlide.css';
import './style/Health.css';
import './style/Items.css';
import './style/Brand.css';
import './style/Membership.css';
import './style/FooterTop.css';
import './style/FooterBottom.css';


/* Routes */
/* import {Routes, Route} from "react-router-dom" */

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SaleBanner></SaleBanner>
      <MainSlide></MainSlide>
{/*       <Routes>
        <Route path='/' element={Health}></Route>
        <Route path='/' element={Items}></Route>
        <Route path='/' element={Brand}></Route>
        <Route path='/' element={Membership}></Route>
        <Route path='/join' element={join}></Route>
        <Route path='/Detail' element={Detail}></Route>
      </Routes> */}
      <Health></Health>
      <Items></Items>
      <Brand></Brand>
      <Membership></Membership>
      <FooterTop></FooterTop>
      <FooterBottom></FooterBottom>
      
    </div>
  );
}

export default App;
