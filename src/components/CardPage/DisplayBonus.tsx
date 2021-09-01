import React from "react"
import { Bonus, StatDefinition } from "../../apiType"

export default function DisplayBonus(props: Props): JSX.Element {
  const bonus = props.bonus
  return (
    <li><b>{bonus.bonusName}</b>
      <ul>
        <li>{bonus.bonusDescription}</li>
        <li>Rang {bonus.bonusRank.rank} ({bonus.value}/{bonus.threshold} {props.stat.statName})</li>
      </ul>
    </li>
  )
}

interface Props {
  bonus: Bonus
  stat: StatDefinition
}
