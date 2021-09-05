import React from "react"
import {Link} from "react-router-dom"
import frDefinition from "../../GrimoireCardDefinition-fr.json"
import { cardImageStyle, getCardBonus, getUserCardFromCollection } from "../../helpers"
import { Card, Bonus, GrimoireCardDefinition } from "../../apiType"
import AdvancedInfo from "./AdvancedInfo"

export default function CardPreview(props: Props): JSX.Element {
  const grimoireCardDefinition: GrimoireCardDefinition = frDefinition
  const card = grimoireCardDefinition[props.cardId]
  return (
    <div className="grimoireCard">
      <li style={cardImageStyle(card.normalResolution.image, true)}>
        <Link to={"/Unknown/Unknown/" + card.cardId}> </Link>
        <div className="content">
          <h3 dangerouslySetInnerHTML={{__html:card.cardName}}></h3>
        </div>
      </li>
      {props.showAdvanced ?
        <AdvancedInfo
          card={card}
          userCard={getUserCardFromCollection(props.cardId, props.cardCollection)}
          bonus={getCardBonus(props.cardId, props.bonuses)}
        />
      : null}
    </div>
  )
}

interface Props {
  cardId: string
  cardCollection: Array<Card>
  bonuses: Array<Bonus>
  showAdvanced?: boolean
}
