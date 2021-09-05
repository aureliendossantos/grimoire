import React from "react"
import { Bonus, Card, CardDefinition } from "../../apiType"

export default function AdvancedInfo(props: Props): JSX.Element {
  return (
    <>
      <li>{props.userCard ? "✔️ " + props.userCard.score : "❌"} {props.card.points} pts</li>
      {props.bonus ? <li>{props.bonus.bonusName}</li> : null}
    </>
  )
}

interface Props {
  card: CardDefinition
  userCard: Card | false
  bonus: Bonus | false
}
