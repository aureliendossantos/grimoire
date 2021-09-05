import React from "react"
import { Link } from "react-router-dom"
import { cardImageStyle } from "../../helpers"
import { Theme } from "../../apiType"

export default function ThemePreview(props: Props): JSX.Element {
  return (
    <div className="grimoireCard">
      <li style={cardImageStyle(props.theme.normalResolution.image, true)}>
        <Link to={"/" + props.theme.themeId}> </Link>
        <div className="content">
          <h3 dangerouslySetInnerHTML={{__html:props.theme.themeName}}></h3>
        </div>
      </li>
    </div>
  )
}

interface Props {
  theme: Theme
}
