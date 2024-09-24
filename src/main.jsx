import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import Course from './components/courses/course'
import Login from './components/auth/login.jsx'
import Register from './components/auth/signup.jsx'
import Region from './components/regional-crops/region.jsx'
import { MyBusinessPlan } from './components/mybussiness/bussinessPlan.jsx'
import Market from './components/market/market.jsx'
import Community from './components/community/community.jsx'
import SoilDataFetcher from './components/regional-crops/rec.jsx'
import CropDetails from './components/regional-crops/cropsData.jsx'
import User from './components/user/user.jsx'
import Createvideo from './components/courses/createvideo.jsx'
import Player from './components/courses/player.jsx'
import { Plan } from './components/mybussiness/plan.jsx'
import { DataProvider } from './components/courses/dataContext.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home  />
      },
      {
        path:"/courses",
        element: <Course />
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/signup",
        element: <Register/>
      },
      {
        path:"/regional-crops",
        element: <Region/>
      },
      {
        path: "/regional-crops/Tomato",
        element: <CropDetails />
      },      
        {
          path:"/bussinessplan",
          element: <MyBusinessPlan/>
        },
        {
          path:"/businessDiary/plan",
          element: <Plan/>
        },
        {
          path:"/market",
          element: <Market/>
        },
        {
          path:"/community",
          element: <Community/>
        },
        {
          path:"/soil",
          element: <SoilDataFetcher/>
        },
        {
          path:"/user",
          element: <User/>
        },
        {
          path:"/courses/player/:id",
          element: <Player/>
        },
        {
          path:"/create-video",
          element: <Createvideo/>
        },
       
    ]
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
