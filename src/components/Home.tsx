import React from "react"
import "../compCSS/home.css"
import { Team } from "../types/types"
import { baseURL, options } from "../Api"
import { TeamC } from "./TeamC"

export const Home = () => {
  let [teamName, setTeamName] = React.useState<string>("")
  let [teamData, setTeamData] = React.useState<Team>({
    id: 0,
    name: "",
    logo: "",
    country: "",
  } as Team)

  function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    async function getTeamInfo() {
      const res = await fetch(`${baseURL}teams?name=${teamName}`, options)
      const response = await res.json()
      const data = response.response
      setTeamData({
        id: data[0].team.id,
        name: data[0].team.name,
        logo: data[0].team.logo,
        country: data[0].team.country,
      } as Team)
    }
    getTeamInfo()
    setTeamName("")
  }
  React.useEffect(() => {
    if (teamName && teamData.name.toLowerCase() === teamName.toLowerCase())
      console.log(teamData)
  }, [teamData])

  function handlename(e: React.FormEvent<HTMLInputElement>) {
    setTeamName(e.currentTarget.value)
  }

  return (
    <div className="home-image">
      <div className="home-content">
        <form className="search-team">
          <label className="label">Search Team</label>
          <input
            onChange={handlename}
            className="input"
            placeholder="Enter team name"
            value={teamName}
            type="text"
          />
          <button className="btn" onClick={handleSearch} type="submit">
            Search
          </button>
        </form>
        {teamData.name && <TeamC key={teamData.id} team={teamData} />}
      </div>
    </div>
  )
}
