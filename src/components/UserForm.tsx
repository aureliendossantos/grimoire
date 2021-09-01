import React, {useState} from "react"

export default function UserForm(props:Props):JSX.Element {
  const [username, setUsername] = useState(props.username)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.onSubmit(username)
    }}>
      <label htmlFor="username">Pseudo</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value)
        }} />
      <input
        type="submit"
        value="Lezgongue" />
    </form>
  )
}

interface Props {
  username: string,
  onSubmit: (username:string) => void
}
