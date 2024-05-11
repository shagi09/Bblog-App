import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Authors from './pages/Authors'
import CategoryPosts from './pages/CategoryPosts'
import CreatePost from './pages/CreatePost'
import DashBoard from './pages/DashBoard'
import DeletePost from './pages/DeletePost'
import EditPost from './pages/EditPost'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Logout from './pages/Logout'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import AuthorPosts from './pages/AuthorPosts'
import Layout from './components/Layout'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>} />
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='logout' element={<Logout/>} />
      <Route path='profile/:id' element={<UserProfile/>} />
      <Route path='authors' element={<Authors/>} />
      <Route path='create' element={<CreatePost/>} />
      <Route path='posts/categories/:category' element={<CategoryPosts/>} />
      <Route path='posts/users/:id' element={<AuthorPosts/>} />
      <Route path='myposts/:id' element={<DashBoard/>} />
      <Route path='posts/:id/edit' element={<EditPost/>} />
      <Route path='logout' element={<Logout/>} />
      <Route path='*' element={<ErrorPage/>} />
      <Route path='posts/:id' element={<PostDetail/>} />
    


    </Routes>

  )
}

export default App
