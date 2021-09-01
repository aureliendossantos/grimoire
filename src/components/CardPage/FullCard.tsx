import React from "react"
import {Link} from "react-router-dom"
import {getUserCardFromCollection, getCardBonus, cardImageStyle} from "../../helpers"
import frDefinition from "../../DestinyGrimoireCardDefinition-fr.json"
import enDefinition from "../../DestinyGrimoireCardDefinition-en.json"
import Stats from "./Stats"
import { Card, Bonus, GrimoireCardDefinition } from "../../apiType"

export default function FullCard(props: Props): JSX.Element {
  const grimoireCardDefinition: GrimoireCardDefinition = frDefinition
  const grimoireCardDefinitionEnglish: GrimoireCardDefinition = enDefinition

  const cardId = props.cardId
  const card = grimoireCardDefinition[cardId]
  const englishCard = grimoireCardDefinitionEnglish[cardId]
  const userCard = getUserCardFromCollection(cardId, props.cardCollection)
  const bonus = getCardBonus(cardId, props.bonuses)
  return (
    <>
      <p><Link to="/"><button>Retour à l'accueil</button></Link></p>
      <div style={cardImageStyle(card.normalResolution.image)}></div>
      <h3 dangerouslySetInnerHTML={{__html:card.cardName}}></h3>
      {card.cardIntro ?
        <figure>
          <blockquote>
            <p dangerouslySetInnerHTML={{__html:card.cardIntro}}></p>
          </blockquote>
          {card.cardIntroAttribution ?
            <figcaption dangerouslySetInnerHTML={{__html:card.cardIntroAttribution}}></figcaption>
          : null}
        </figure>
      : null}
      {userCard ?
        <p>
          <b>Obtenue.</b> Score : {userCard.score}, Points : {userCard.points}
        </p>
      : <p>
          <b>Non obtenue.</b> {card.points > 0 ? <>Donne {card.points} points.</> : "Ne donne pas de points."}
        </p>
      }
      {card.statisticCollection ?
        <div>
          <h4>Statistiques</h4>
          <Stats
            cardStats={card.statisticCollection}
            englishCardStats={englishCard.statisticCollection}
            userStats={userCard ? userCard.statisticCollection : false}
            bonus={bonus} />
        </div>
        : null
      }
      {card.cardDescription ?
        <p dangerouslySetInnerHTML={{__html:card.cardDescription}}></p>
      : null}
      {card.unlockHowToText ?
        <p className="unlockHowToText" dangerouslySetInnerHTML={{__html:card.unlockHowToText}}></p>
      : null}
    </>
  )
}

interface Props {
  cardId: string
  isLoaded: boolean
  cardCollection: Array<Card>
  bonuses: Array<Bonus>
}
