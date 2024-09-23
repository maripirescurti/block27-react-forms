import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

export default function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setUsername={setUsername}/>
      {username && <h3>Logged in as: {username}</h3>}
    </>
  )
}

