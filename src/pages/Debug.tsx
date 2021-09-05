import React, {useEffect, useState} from "react"
import config from "../../grimoire-config.json"

export default function Debug() {
  const [result, setResult] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const host = 'https://www.bungie.net/d1/Platform/Destiny/'

  useEffect(() => {
    (async () => {try {
        // const url = host + 'Vanguard/Grimoire/Definition/'
        const url = host + 'Manifest/'
        const response = await fetch(url, {headers: {'X-API-Key': config.apiKey}})
        if (response.ok) {
          const data = await response.json()
          setResult(data)
          setIsLoaded(true)
        } else {
          console.error(`Error ${response.status} : ${response.statusText}`)
        }
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])
  return (
    <>
      {isLoaded ?
        <pre>{JSON.stringify(result, null, 2)}</pre>
      :
        <h3>Chargement...</h3>}
    </>
  )
}
