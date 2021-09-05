import React from "react"
import { getUserCardFromCollection } from "../../helpers"
import CardPreview from "./CardPreview"
import { Card, Bonus, GrimoireDefinition, UseParams } from "../../apiType"
import { useParams } from "react-router-dom"
import DisplayPath from "./DisplayPath"
import ThemePreview from "./ThemePreview"
import PagePreview from "./PagePreview"

export default function ThemesView(props: Props): JSX.Element {
  let { themeId, pageId } = useParams<UseParams>()
  return (
    <>
      <DisplayPath />
      <ul className="grimoire">
        {pageId ?
          props.grimoireDefinition.themeCollection.filter(theme => theme.themeId == themeId)[0].pageCollection.filter(page => page.pageId == pageId)[0].cardBriefs.map(cardBrief => {
            const filter = props.filter
            const gotCard = getUserCardFromCollection(cardBrief.cardId, props.cardCollection) ? true : false
            if (filter == "all" || filter == "unlocked" && gotCard || filter == "locked" && !gotCard)
            return (
              <CardPreview
                cardId={cardBrief.cardId.toString()}
                cardCollection={props.cardCollection}
                bonuses={props.bonuses}
                showAdvanced={props.showAdvanced}
              />
            )
          })
        : themeId ?
            props.grimoireDefinition.themeCollection.filter(theme => theme.themeId == themeId)[0].pageCollection.map(page => {
              return <PagePreview page={page} />
            })
          : props.grimoireDefinition.themeCollection.map(theme => {
              return <ThemePreview theme={theme} />
            })
        }
      </ul>
    </>
  )
}

interface Props {
  grimoireDefinition: GrimoireDefinition
  cardCollection: Array<Card>
  bonuses: Array<Bonus>
  showAdvanced: boolean
  filter: string
}
