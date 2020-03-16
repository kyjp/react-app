import React, { FC, useState, createContext } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import LoginContainar from '@/containars/LoginContainar'
import DetailContainar from '@/containars/DetailContainar'

export const UserContext = createContext({} as any)

const App: FC = () => {
  const [user, setUser] = useState({ username: '', password: ''})
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/login/" component={LoginContainar} />
          <Route exact path="/detail/:id" component={DetailContainar} />
        </Switch>
      </HashRouter>
    </>
  )
}

export default App
