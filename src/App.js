import './App.css';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import NavBar from './Component/Utility/NavBar';
import HomePage from './Page/Home/HomePage';
import LoginPage from './Page/Auth/LoginPage';

function App() {
  return (
    <div>

      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/facebook-clone2023'   element={<HomePage />} />
        </Routes>
      </BrowserRouter> 
      
      
    </div>
  );
}

export default App;
