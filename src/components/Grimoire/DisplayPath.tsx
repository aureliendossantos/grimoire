import React from "react"
import { Link, useParams } from "react-router-dom"
import { UseParams } from "../../apiType"

export default function Path(): JSX.Element {
  let { themeId, pageId, cardId } = useParams<UseParams>()
  return (
    <div className="path">
        <p>
        <Link to="/">Grimoire</Link>
        {themeId ?
          <>
            {" > "}
            <Link to={"/" + themeId}>
              {themeId}
            </Link>
          </>
        : null}
        {pageId ?
          <>
            {" > "}
            <Link to={"/" + themeId + "/" + pageId}>
              {pageId}
            </Link>
          </>
        : null}
        {cardId ? " > " + cardId : null}
      </p>
    </div>
  )
}
