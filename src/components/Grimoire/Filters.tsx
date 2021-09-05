import React from "react"

export default function Filters(props:Props):JSX.Element {
  return (
    <form>
      <div className="radio">
        <input
          type="radio" name="view" id="themes" value="themes"
          checked={props.view == "themes"}
          onChange={(event) => {
            props.onViewChange(event.target.value)
          }}
        />
        <label htmlFor="themes">Thèmes</label>
        <input
          type="radio" name="view" id="cards" value="cards"
          checked={props.view == "cards"}
          onChange={(event) => {
            props.onViewChange(event.target.value)
          }}
        />
        <label htmlFor="cards">Cartes</label>
        <input
          type="radio" name="view" id="list" value="list"
          checked={props.view == "list"}
          onChange={(event) => {
            props.onViewChange(event.target.value)
          }}
        />
        <label htmlFor="list">Liste</label>
      </div>
      <input
        type="checkbox"
        id="showAdvanced"
        checked={props.showAdvanced}
        onChange={(event) => {
          props.onShowAdvancedChange(event.target.checked)
        }}
      />
      <label htmlFor="showAdvanced">Avancé</label>
      <div className="radio">
        <input
          type="radio" name="filter" id="all" value="all"
          checked={props.filter == "all"}
          onChange={(event) => {
            props.onFilterChange(event.target.value)
          }}
        />
        <label htmlFor="all">Tout</label>
        <input
          type="radio" name="filter" id="unlocked" value="unlocked"
          checked={props.filter == "unlocked"}
          onChange={(event) => {
            props.onFilterChange(event.target.value)
          }}
        />
        <label htmlFor="unlocked">Obtenu</label>
        <input
          type="radio" name="filter" id="locked" value="locked"
          checked={props.filter == "locked"}
          onChange={(event) => {
            props.onFilterChange(event.target.value)
          }}
        />
        <label htmlFor="locked">Non obtenu</label>
      </div>
    </form>
  )
}

interface Props {
  view: string
  showAdvanced: boolean
  filter: string
  onViewChange: (userInput: string) => void
  onShowAdvancedChange: (userInput: boolean) => void
  onFilterChange: (userInput: string) => void
}
