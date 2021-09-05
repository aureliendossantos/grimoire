import React from "react"
import { Link } from "react-router-dom"
import { GrimoireCardDefinition, GrimoireDefinition } from "../../apiType"

export default function ProList(props: Props): JSX.Element {
  return (
    <p>
      {props.grimoireDefinition.themeCollection.map(theme => {
        return (
          <details>
            <summary>{theme.themeName}</summary>
              {theme.pageCollection.map(page => {
                return (
                  <details>
                    <summary>{page.pageName}</summary>
                    <table>
                      <thead>
                        <th>Carte</th>
                        <th>Points</th>
                        <th>Total</th>
                      </thead>
                      {page.cardBriefs.map(cardBrief => {
                        return (
                          <tr>
                            <td className="link">
                              <div dangerouslySetInnerHTML={{__html:props.cardDefinition[cardBrief.cardId].cardName}}></div>
                              <Link to={"/Unknown/Unknown/" + cardBrief.cardId}> </Link>
                            </td>
                            <td style={{textAlign: "right"}}>
                              {cardBrief.points}
                            </td>
                            <td style={{textAlign: "right"}}>
                              {cardBrief.totalPoints}
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </details>
                )
              })}
          </details>
        )
      })}
    </p>
  )
}

interface Props {
  cardDefinition: GrimoireCardDefinition
  grimoireDefinition: GrimoireDefinition
}