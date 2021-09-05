import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import config from "../grimoire-config.json"

import UserForm from "./components/UserForm"
import Debug from './pages/Debug'
import NotFound from './pages/NotFound'

const Grimoire = React.lazy(() => import('./pages/Grimoire'))
const CardPage = React.lazy(() => import('./pages/CardPage'))

export default function Main():JSX.Element {
  const [username, setUsername] = useState("")
  const [platform, setPlatform] = useState("psn")
  const [accountID, setAccountID] = useState("")
  const [userGrimoire, setuserGrimoire] = useState({
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
          const response = await fetch(host + (platform == "xbox" ? '1' : '2') + '/Stats/GetMembershipIdByDisplayName/' + username + '/', {headers: {'X-API-Key': config.apiKey}})
          console.log(host + (platform == "xbox" ? '1' : '2') + '/Stats/GetMembershipIdByDisplayName/' + username + '/')
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
          setuserGrimoire(data.Response.data)
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
        platform={platform}
        onSubmit={(username, platform) => {
          setUsername(username)
          setPlatform(platform)
        }}
      />
      <Router>
        <Switch>
          <Route path="/:themeId/:pageId/:cardId">
            <Suspense fallback={<h3>Chargement...</h3>}>
              <CardPage isLoaded={isLoaded} userGrimoire={userGrimoire} />
            </Suspense>
          </Route>
          <Route path={["/:themeId/:pageId", "/:themeId", "/"]}>
            <Suspense fallback={<h3>Chargement...</h3>}>
              <Grimoire isLoaded={isLoaded} userGrimoire={userGrimoire} />
            </Suspense>
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
