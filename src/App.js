import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/Utility/NavBar';

function App() {
  return (
    <div>

    <h2>Hello</h2>
        
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />} path='home'/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
