import React from "react"
import { baseURL, options } from "../Api"
import "../compCSS/teamCont.css"
import { TeamProps, Player, Fixture } from "../types/types"
import { FixtureC } from "./FixtureC"
import { PlayerC } from "./PlayerC"

export const TeamC = ({ team }: TeamProps) => {
  let [playersArray, setplayersArray] = React.useState<Player[]>([] as Player[])
  let [fixturesArray, setFixturesArray] = React.useState<Fixture[]>(
    [] as Fixture[]
  )

  const d = new Date()
  let year = d.getFullYear()

  React.useEffect(() => {
    async function getPlayersInfo() {
      const res = await fetch(
        `${baseURL}players/squads?team=${team.id}`,
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
        `${baseURL}fixtures?season=${year}&team=${team.id}&next=10`,
        options
      )
      const data = await res.json()
      setFixturesArray(data.response)
    }
    getFixtures()
  }, [])

  const playerElements = playersArray.map((player) => {
    return <PlayerC key={player.id} player={player} />
  })

  const fixtureElements = fixturesArray.map((fixture) => {
    return <FixtureC key={fixture.fixture.id} fixture={fixture} />
  })

  return (
    <div className="team-conatiner">
      <img src={team.logo} alt=" " className="team-logo" />
      <h1 className="team-name">{team.name}</h1>
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
