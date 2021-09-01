import React from "react"
import grimoireCardDefinition from "../../DestinyGrimoireCardDefinition-fr.json"
import { getUserCardFromCollection } from "../../helpers"
import CardPreview from "./CardPreview"
import { Card, Bonus } from "../../apiType"

export default function Collection(props:Props) {
  return (
    <ul className="grimoire">
      {Object.keys(grimoireCardDefinition).map(key => {
        const filter = props.filter
        const gotCard = getUserCardFromCollection(key, props.cardCollection) ? true : false
        if (filter == "all" || filter == "unlocked" && gotCard || filter == "locked" && !gotCard) {
          return (
            <CardPreview
              cardId={key}
              cardCollection={props.cardCollection}
              bonuses={props.bonuses}
              showAdvanced={props.showAdvanced}
            />
          )
        }
      })}
    </ul>
  )
}

interface Props {
  isLoaded: boolean
  cardCollection: Array<Card>
  bonuses: Array<Bonus>
  showAdvanced: boolean
  filter: string
}
