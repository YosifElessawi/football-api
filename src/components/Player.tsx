import "../compCSS/player.css"

export const Player = ({ ...props }) => {
  let color = "black"
  if (props.player.position === "Goalkeeper") {
    color = "Yellow"
  } else if (props.player.position === "Defender") {
    color = "#297949"
  } else if (props.player.position === "Midfielder") {
    color = "#2D3DC8"
  } else if (props.player.position === "Attacker") {
    color = "#C82D53"
  }

  const styles = {
    color: color,
  }

  return (
    <div className="player">
      <img src={props.player.photo} alt="No Image" className="player-photo" />
      <span>{props.player.name}</span>
      <span style={styles}>{props.player.position}</span>
    </div>
  )
}
