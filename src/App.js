import './App.css';
import Login from './LoginPage';
import { BrowserRouter as Main,Route,Routes } from 'react-router-dom';
import Index from './Controls';
import A from './A';
import B from './B';



function App() {
  return (
    <div>
   <Main>
  
   <Routes>
   <Route exact path="" element={ <Login/>}/>
    <Route exact path="/state" element={<Index/>} />
    
   </Routes>
   </Main>


    </div>
  );
}

export default App;
