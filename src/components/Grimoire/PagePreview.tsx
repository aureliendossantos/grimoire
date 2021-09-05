import React from "react"
import { Link, useRouteMatch } from "react-router-dom"
import { cardImageStyle } from "../../helpers"
import { Page } from "../../apiType"

export default function PagePreview(props: Props): JSX.Element {
  let { url } = useRouteMatch()
  return (
    <div className="grimoireCard">
      <li style={cardImageStyle(props.page.normalResolution.image, true)}>
        <Link to={url + "/" + props.page.pageId}> </Link>
        <div className="content">
          <h3 dangerouslySetInnerHTML={{__html:props.page.pageName}}></h3>
        </div>
      </li>
    </div>
  )
}

interface Props {
  page: Page
}
