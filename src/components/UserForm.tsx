import React, {useState} from "react"

export default function UserForm(props:Props):JSX.Element {
  const [username, setUsername] = useState(props.username)
  const [platform, setPlatform] = useState(props.platform)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.onSubmit(username, platform)
    }}>
      <div className="radio">
        <input
          type="radio" name="platform" id="psn" value="psn"
          checked={platform == "psn"}
          onChange={(event) => {
            setPlatform(event.target.value)
          }}
        />
        <label htmlFor="psn">PSN</label>
        <input
          type="radio" name="platform" id="xbox" value="xbox"
          checked={platform == "xbox"}
          onChange={(event) => {
            setPlatform(event.target.value)
          }}
        />
        <label htmlFor="xbox">Xbox</label>
      </div>
      <input
        type="text"
        required
        placeholder="Pseudo"
        name="username"
        id="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
      <input
        type="submit"
        value="Charger"
      />
    </form>
  )
}

interface Props {
  username: string
  platform: string
  onSubmit: (username: string, platform: string) => void
}
