import { useContext } from "react"
import { HalloweenData } from "../HalloweenData"

export default function Nav () {
  const [movies, setMovies] = useContext(HalloweenData)
  return (
    <div>
      <p>List of Spookies to watch: {movies.length}</p>
    </div>
  )
}