import './App.css';
import Category from './Components/Category/Category';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Payment from './Components/Payments/Payment';
import Search from './Components/Search/Search';
import ServiceIcon from './Components/Services/ServiceIcon';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Search/>
      <ServiceIcon/>
      <Category/>
      <Payment/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
