import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import config from "../grimoire-config.json"

import UserForm from "./components/UserForm"
import Grimoire from './pages/Grimoire'
import CardPage from './pages/CardPage'
import Debug from './pages/Debug'
import NotFound from './pages/NotFound'

export default function Main():JSX.Element {
  const [username, setUsername] = useState('')
  const [accountID, setAccountID] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [filter, setFilter] = useState("all")
  const [grimoireDefinition, setGrimoireDefinition] = useState([])
  const [myGrimoire, setMyGrimoire] = useState({
    "score": 0,
    "cardCollection": [],
    "cardToHide": [],
    "bonuses": []
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const host = 'https://www.bungie.net/d1/Platform/Destiny/'

  useEffect(() => {
    (async () => {
      try {
        if (username != '') {
          const response = await fetch(host + '2/Stats/GetMembershipIdByDisplayName/' + username + '/', {headers: {'X-API-Key': config.apiKey}})
          const data = await response.json()
          setAccountID(data.Response)
        }
      } catch (err) {
        console.error(err)
      }
    })()
  }, [username],
  )

  useEffect(() => {
    (async () => {
      try {
        if (accountID != '') {
          const response = await fetch(host + 'Vanguard/Grimoire/2/' + accountID + '/', {headers: {'X-API-Key': config.apiKey}})
          const data = await response.json()
          setMyGrimoire(data.Response.data)
          setIsLoaded(true)
        }
      } catch (err) {
        console.error(err)
      }
    })()
  }, [accountID])

  return (
    <div>
      <UserForm
        username={username}
        onSubmit={(userInput) => {
          setUsername(userInput)
        }}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Grimoire
              isLoaded={isLoaded}
              myGrimoire={myGrimoire}
              showAdvanced={showAdvanced}
              filter={filter}
              onShowAdvancedChange={(userInput) => {
                setShowAdvanced(userInput)
              }}
              onFilterChange={(userInput) => {
                setFilter(userInput)
              }}
            />
          </Route>
          <Route path="/card/*">
            <CardPage
              isLoaded={isLoaded}
              myGrimoire={myGrimoire}
            />
          </Route>
          <Route path="/debug/">
            <Debug />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
