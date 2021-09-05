import React, { useState } from "react"
import frCardDefinition from "../GrimoireCardDefinition-fr.json"
import enGrimoireDefinition from "../GrimoireDefinition-en.json"
import { GrimoireCardDefinition, GrimoireDefinition, UserGrimoire } from "../apiType"
import Filters from "../components/Grimoire/Filters"
import ThemesView from "../components/Grimoire/ThemesView"
import CardsView from "../components/Grimoire/CardsView"
import ListView from "../components/Grimoire/ListView"

export default function Grimoire(props:Props):JSX.Element {
  const [view, setView] = useState("themes")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [filter, setFilter] = useState("all")

  const cardDefinition: GrimoireCardDefinition = frCardDefinition
  const grimoireDefinition: GrimoireDefinition = enGrimoireDefinition

  return (
    <>
      {props.isLoaded ?
        <h3>Score : {props.userGrimoire.score} points</h3>
      : <h3>Entrez un pseudo</h3>}
      <Filters
        view={view}
        showAdvanced={showAdvanced}
        filter={filter}
        onViewChange={(userInput) => {
          setView(userInput)
        }}
        onShowAdvancedChange={(userInput) => {
          setShowAdvanced(userInput)
        }}
        onFilterChange={(userInput) => {
          setFilter(userInput)
        }}
      />
      {view == "list" ?
        <ListView
          cardDefinition={cardDefinition}
          grimoireDefinition={grimoireDefinition}
        />
      : view == "themes" ?
          <ThemesView
            grimoireDefinition={grimoireDefinition}
            cardCollection={props.userGrimoire.cardCollection}
            bonuses={props.userGrimoire.bonuses}
            showAdvanced={showAdvanced}
            filter={filter}
          />
        : <CardsView
            cardDefinition={cardDefinition}
            cardCollection={props.userGrimoire.cardCollection}
            bonuses={props.userGrimoire.bonuses}
            showAdvanced={showAdvanced}
            filter={filter}
          />
      }
    </>
  )
}

interface Props {
  isLoaded: boolean,
  userGrimoire: UserGrimoire,
}
