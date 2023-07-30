import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/Utility/NavBar';

function App() {
  return (
    <div>

      <NavBar />
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
