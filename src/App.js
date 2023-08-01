import './App.css';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import NavBar from './Component/Utility/NavBar';
import HomePage from './Page/Home/HomePage';

function App() {
  return (
    <div>

    <NavBar />
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          
          <Route path='/'   element={<HomePage />} />
        </Routes>
      </BrowserRouter> 
      
      
    </div>
  );
}

export default App;
