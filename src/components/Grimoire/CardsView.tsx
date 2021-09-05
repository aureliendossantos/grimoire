import React from "react"
import { getUserCardFromCollection } from "../../helpers"
import CardPreview from "./CardPreview"
import { Card, Bonus, GrimoireCardDefinition, GrimoireDefinition, Theme, CardDefinition } from "../../apiType"
import { useParams } from "react-router-dom"

export default function CardsView(props: Props): JSX.Element {
  return (
    <ul className="grimoire">
      {Object.keys(props.cardDefinition).map(key => {
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
  cardDefinition: GrimoireCardDefinition
  cardCollection: Array<Card>
  bonuses: Array<Bonus>
  showAdvanced: boolean
  filter: string
}
