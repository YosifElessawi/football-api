import { positions } from "@mui/system"
import "../compCSS/player.css"

export const Player = ({ ...props }) => {
  const determinePostition = (position: string) => {
    if (position === "Goalkeeper") {
      return "Yellow"
    }
    if (position === "Defender") {
      return "#297949"
    }
    if (position === "Midfielder") {
      return "#2D3DC8"
    }
    if (position === "Attacker") {
      return "#C82D53"
    }
  }

  const styles = {
    color: determinePostition(props.player.position as string),
  }

  return (
    <div className="player">
      <img src={props.player.photo} alt="No Image" className="player-photo" />
      <span>{props.player.name}</span>
      <span style={styles}>{props.player.position}</span>
    </div>
  )
}
