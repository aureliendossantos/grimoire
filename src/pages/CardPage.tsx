import React from "react"
import CardArticle from "../components/CardPage/CardArticle";
import { UseParams, UserGrimoire } from "../apiType"
import { useParams } from "react-router-dom";
import DisplayPath from "../components/Grimoire/DisplayPath";

export default function CardPage(props:Props) {
  // remove base (i.e. "/" or "/grimoire/") then "card/" from URL
  let { cardId } = useParams<UseParams>()

  return (
    <>
      <DisplayPath />
      {cardId ?
        <article className="grimoireCard">
          <CardArticle
            cardId={cardId}
            isLoaded={props.isLoaded}
            cardCollection={props.userGrimoire.cardCollection}
            bonuses={props.userGrimoire.bonuses}
          />
        </article>
      : null}
    </>
  )
}

interface Props {
  isLoaded: boolean
  userGrimoire: UserGrimoire
}
