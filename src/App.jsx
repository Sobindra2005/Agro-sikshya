import './App.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/menu/header';
import Sidebar from './components/menu/sidebar';
import UserProfile from './components/menu/userprofile';
import { GetCurrentUser } from './appwrite/service';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
console.log(GetCurrentUser())
  return (
    <>
      <div className={isLoggedIn ? 'sm:pl-56' : 'flex flex-col justify-between'}>
        <div className="flex justify-between items-center">
          {isLoggedIn ? (
            <>
              <Sidebar />
              <UserProfile />
            </>
          ) : (
            <Header />
          )}
        </div>
        <Outlet context={setIsLoggedIn}/>
      </div>
    </>
  );
}

export default App;
