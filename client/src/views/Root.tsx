import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import Auth from './Auth/Auth'
import Home from './Home/Home'
import SignIn from './Auth/SignIn/SignIn'
import SignUp from './Auth/SignUp/SignUp'
import Layout from '../components/Layout'
import TasksPage from './Home/TasksPage/TasksPage'
import Calculator from './Home/Calculator/Calculator'
import Storage from './Home/Storage/Storage'
import Statistics from './Home/Statistics/Statistics'
import Information from './Home/Information/Information'
import { useEffect } from 'react';

const Root = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  console.log(user)

  return (
    <>
      <Routes>
        {user ? <Route path="/*" element={<Home />} /> : <Route path="/*" element={<Auth />} />}
      </Routes>
    </>
  )
}

export default Root