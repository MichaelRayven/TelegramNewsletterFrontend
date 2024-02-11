import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '@/styles/styles.scss'
import RegisterPage from './pages/Register/Register'
import HomePage from './pages/Home/Home'
import LoginPage from './pages/Login/Login'
import { store  } from '@/config/redux/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signin",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <RegisterPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
