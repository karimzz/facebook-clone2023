import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/Utility/NavBar';

function App() {
  return (
    <div>

        
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />} path='/'/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
