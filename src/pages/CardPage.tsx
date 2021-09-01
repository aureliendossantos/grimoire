import React from "react"
import FullCard from "../components/CardPage/FullCard"
import { UserGrimoire } from "../apiType"

export default function CardPage(props:Props) {
  // remove base (i.e. "/" or "/grimoire/") then "card/" from URL
  const cardId = window.location.pathname.substring(import.meta.env.BASE_URL.length + 5)

  return (
    <>
      <article className="grimoireCard">
        <FullCard
          cardId={cardId}
          isLoaded={props.isLoaded}
          cardCollection={props.myGrimoire.cardCollection}
          bonuses={props.myGrimoire.bonuses}
        />
      </article>
    </>
  )
}

interface Props {
  isLoaded: boolean
  myGrimoire: UserGrimoire
}
