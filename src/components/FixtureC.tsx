import "../compCSS/fixture.css"
import { FixtureProps } from "../types/types"

export const FixtureC = ({ fixture }: FixtureProps) => {
  return (
    <div>
      <div className="fixture">
        <div className="fixture-date">
          {fixture.fixture.date.slice(0, 16).replace("T", " ")}
        </div>
        <img src={fixture.teams.home.logo} alt="err" className="team--logo" />
        <span className="fixture-teams">{fixture.teams.home.name}</span>
        <span className="vs">:</span>
        <span className="fixture-teams">{fixture.teams.away.name}</span>
        <img src={fixture.teams.away.logo} alt="err" className="team--logo" />
      </div>
    </div>
  )
}
