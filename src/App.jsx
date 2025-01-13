import './App.css'
import { NhostProvider } from '@nhost/react'
import { nhost } from './lib/nhost.js'
import SignIn from './signin'
import { useEffect, useState } from 'react'
import MainPage from './MainPage.jsx'



function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(nhost.auth.getSession())

    nhost.auth.onAuthStateChanged((_, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NhostProvider nhost={nhost}>
      {(session) ? <MainPage sessionFunction={setSession} /> : <SignIn />}
    </NhostProvider>
  )
}

export default App
