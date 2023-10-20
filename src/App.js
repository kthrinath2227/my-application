import './App.css';
import Login from './LoginPage/login';
import { BrowserRouter as Main,Route,Routes } from 'react-router-dom';
import Controls from './Controls/control';




function App() {
  return (
    <div>
   <Main>
  
   <Routes>
   <Route exact path="" element={ <Login/>}/>
   <Route exact path="/state" element={<Controls/>} />
   </Routes>
   </Main>


    </div>
  );
}

export default App;
