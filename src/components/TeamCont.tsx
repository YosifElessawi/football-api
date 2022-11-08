import React from "react"
import { baseURL, options } from "../Api"
import "../compCSS/teamCont.css"
import { Player } from "./Player"
import { Players } from "../types/players"
import { Fixture } from "./Fixture"
import { Fixtures } from "../types/fixtures"

export const TeamCont = ({ ...props }) => {
  let [playersArray, setplayersArray] = React.useState<Players[]>(
    [] as Players[]
  )
  let [fixturesArray, setFixturesArray] = React.useState<Fixtures[]>(
    [] as Fixtures[]
  )

  const d = new Date()
  let year = d.getFullYear()

  React.useEffect(() => {
    async function getPlayersInfo() {
      const res = await fetch(
        `${baseURL}players/squads?team=${props.team.id}`,
        options
      )
      const response = await res.json()
      const data = response.response
      setplayersArray(data[0].players)
    }
    getPlayersInfo()
  }, [])

  React.useEffect(() => {
    async function getFixtures() {
      const res = await fetch(
        `${baseURL}fixtures?season=${year}&team=${props.team.id}&next=10`,
        options
      )
      const data = await res.json()
      setFixturesArray(data.response)
    }
    getFixtures()
  }, [])

  const playerElements = playersArray.map((player) => {
    return <Player key={player.id} player={player} />
  })

  const fixtureElements = fixturesArray.map((fixture) => {
    return <Fixture key={fixture.fixture.id} fixture={fixture} />
  })

  return (
    <div className="team-conatiner">
      <img src={props.team.logo} alt="No Image Found" className="team-logo" />
      <h1 className="team-name">{props.team.name}</h1>
      <div className="players-container">
        <h2 className="players-header">Players</h2>
        {playerElements}
      </div>
      <div className="fixtures-container">
        <h2 className="fixtures-header">Upcoming Fixtures</h2>
        {fixtureElements}
      </div>
    </div>
  )
}
