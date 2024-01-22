import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from './Pages/Home';
import SK from './Pages/SK';
import Engineering from './Pages/Login';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/Pages/SK' element ={<SK/>}/>
          <Route path='/Pages/Engineering' element = {<Engineering/>}/>
        </Routes>
     </BrowserRouter>
      
      
    </div>
  );
}

export default App;
