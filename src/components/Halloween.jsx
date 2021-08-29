import { useContext } from "react"
import Generator from "./Generator"
import { HalloweenData } from "../HalloweenData"

export default function Halloween () {
  const [ movies, setMovies ] = useContext(HalloweenData)
  return (
    <div>
      {movies.map(movie => (
        <Generator name={movie.name} location={movie.location} year={movie.year} key={movie.id}/>
      ))}
    </div>
  )
}