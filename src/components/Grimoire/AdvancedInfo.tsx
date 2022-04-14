import React from "react"
import { Bonus, Card, CardDefinition } from "../../apiType"

export default function AdvancedInfo(props: Props): JSX.Element {
  return (
    <ul className="advancedInfo">
      <li>{props.userCard ? "✔️ " + props.userCard.score : "❌ " + props.card.points} pts</li>
      {props.bonus ? <li>{props.bonus.bonusName}</li> : null}
    </ul>
  )
}

interface Props {
  card: CardDefinition
  userCard: Card | false
  bonus: Bonus | false
}
