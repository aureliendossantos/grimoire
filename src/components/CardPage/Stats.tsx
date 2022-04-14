import React from "react"
import DisplayBonus from "./DisplayBonus"
import { StatDefinition, Stat, Bonus } from "../../apiType"

export default function Stats(props: Props) {
  const userStats = props.userStats
  const bonus = props.bonus
  return (
    <ul>
      {props.cardStats.map((stat, statIndex) => {
        return <li><b>{stat.statName}</b>
          <ul className="rankCollection">
            {stat.rankCollection ?
              stat.rankCollection.map((rank, rankIndex) => {
                return <li>
                  {userStats && "rankCollection" in userStats[statIndex] && rankIndex in userStats[statIndex].rankCollection ? "✔️ " : "❌ "}
                  {userStats && statIndex in userStats ?
                    userStats[statIndex].displayValue + "/"
                  : null}
                  {rank.threshold}, {rank.points} points
                </li>
              })
            : <li>
                {userStats && statIndex in userStats ?
                  userStats[statIndex].displayValue
                : "Pas de donnée."
                }
              </li>
            }
            {bonus && props.englishCardStats && bonus.statName == props.englishCardStats[statIndex].statName ?
              <DisplayBonus bonus={bonus} stat={stat} />
            : null}
          </ul>
        </li>
      })}
    </ul>
  )
}

interface Props {
  cardStats: Array<StatDefinition>
  englishCardStats: Array<StatDefinition> | undefined
  userStats: Array<Stat> | false | undefined
  bonus: Bonus | false
}
