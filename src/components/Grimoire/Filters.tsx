import React from "react"

export default function Filters(props:Props):JSX.Element {
  return (
    <form>
      <input
        type="checkbox"
        id="showAdvanced"
        checked={props.showAdvanced}
        onChange={(event) => {
          props.onShowAdvancedChange(event.target.checked)
        }}
      />
      <label htmlFor="showAdvanced">Avancé</label>

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
    </form>
  )
}

interface Props {
  showAdvanced: boolean,
  filter: string,
  onShowAdvancedChange: (userInput: boolean) => void
  onFilterChange: (userInput: string) => void
}
