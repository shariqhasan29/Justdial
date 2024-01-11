import './App.css';
import Box from './Components/Box/Box';
import Nav from './Components/Nav/Nav';
import Search from './Components/Search/Search';
import ServiceIcon from './Components/Services/ServiceIcon';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Search/>
      <ServiceIcon/>
      <Box/>
      
      
    </div>
  );
}

export default App;
