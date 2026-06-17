import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorBoundary from './errorboundary'
import PostList from './postlist'
import Example1 from './example1'
import Example2 from './example2'
import Example3 from './example3'
import './app.css'

function HomeScreen() {
  return (
    <div>
      <h1>home</h1>

      <h2>Exercise 2: PostList</h2>
      <PostList />

      <h2>Exercise 3: Parse JSON</h2>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  )
}

function ProfileScreen() {
  return <h1>profile</h1>
}

function ShopScreen() {
  throw new Error('shop crashed')
}

function App() {
  const url = 'https://webhook.site/your-unique-url'

  async function sendData() {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    })
    let data = await response.text()
    console.log(data)
  }

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">Shop</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ padding: '20px' }}>
        <h2>Exercise 4: Post JSON Data</h2>
        <button onClick={sendData}>Send Data</button>

        <hr />

        <Routes>
          <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
          <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
