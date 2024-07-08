import './App.css';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import NavBar from './Component/Utility/NavBar';
import HomePage from './Page/Home/HomePage';
import LoginPage from './Page/Auth/LoginPage';
import ProfilePage from './Page/Profile/ProfilePage';
import ProfileHeadComponent from './Component/Profile/ProfileHeadComponent';
import SharedComponent from './Component/Utility/SharedComponent';

function App() {
  return (
    <div>

      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />

          <Route path='/' element={<SharedComponent />}>
            <Route index element={<HomePage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter> 
      
      
    </div>
  );
}

export default App;
