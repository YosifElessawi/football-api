import "../compCSS/fixture.css"

export const Fixture = ({ ...props }) => {
  return (
    <div>
      <div className="fixture">
        <div className="fixture-date">
          {props.fixture.fixture.date.slice(0, 16).replace("T", " ")}
        </div>
        <img
          src={props.fixture.teams.home.logo}
          alt="err"
          className="team--logo"
        />
        <span className="fixture-teams">{props.fixture.teams.home.name}</span>
        <span className="vs">:</span>
        <span className="fixture-teams">{props.fixture.teams.away.name}</span>
        <img
          src={props.fixture.teams.away.logo}
          alt="err"
          className="team--logo"
        />
      </div>
    </div>
  )
}
