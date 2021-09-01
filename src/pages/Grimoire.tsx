import React from "react"
import Filters from "../components/Grimoire/Filters"
import Collection from "../components/Grimoire/Collection"
import { UserGrimoire } from "../apiType"

export default function Grimoire(props:Props):JSX.Element {
  return (
    <>
      {props.isLoaded ?
        <h3>Score : {props.myGrimoire.score} points</h3>
      : <h3>Entrez un pseudo</h3>}
      <Filters
        showAdvanced={props.showAdvanced}
        filter={props.filter}
        onShowAdvancedChange={(userInput) => {
          props.onShowAdvancedChange(userInput)
        }}
        onFilterChange={(userInput) => {
          props.onFilterChange(userInput)
        }}
      />
      <Collection
        isLoaded={props.isLoaded}
        cardCollection={props.myGrimoire.cardCollection}
        bonuses={props.myGrimoire.bonuses}
        showAdvanced={props.showAdvanced}
        filter={props.filter}
      />
    </>
  )
}

interface Props {
  isLoaded: boolean,
  myGrimoire: UserGrimoire,
  showAdvanced: boolean,
  filter: string,
  onShowAdvancedChange: (userInput: boolean) => void,
  onFilterChange: (userInput: string) => void
}
