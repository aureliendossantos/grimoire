import React from "react"
import {Link} from "react-router-dom"
import frDefinition from "../../DestinyGrimoireCardDefinition-fr.json"
import { getUserCardFromCollection, getCardBonus, cardImageStyle } from "../../helpers"
import { Card, Bonus, GrimoireCardDefinition } from "../../apiType"

export default function CardPreview(props: Props): JSX.Element {
  const grimoireCardDefinition: GrimoireCardDefinition = frDefinition

  const card = grimoireCardDefinition[props.cardId]
  const userCard = getUserCardFromCollection(props.cardId, props.cardCollection)
  const bonus = getCardBonus(props.cardId, props.bonuses)
  return (
    <div className="grimoireCard">
      <li style={cardImageStyle(card.normalResolution.image, true)}>
        <Link to={"card/" + card.cardId}> </Link>
        <div className="content">
          <h3 dangerouslySetInnerHTML={{__html:card.cardName}}></h3>
        </div>
      </li>
      {props.showAdvanced ? <><li>{userCard ? "✔️ " + userCard.score : "❌"}</li><li>{card.points}</li>{bonus ? <li>{bonus.bonusName}</li> : null}</> : null}
    </div>
  )
}

interface Props {
  cardId: string
  cardCollection: Array<Card>
  bonuses: Array<Bonus>
  showAdvanced: boolean
}
