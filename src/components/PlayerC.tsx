import "../compCSS/player.css"
import { PlayerProps } from "../types/types"

export const PlayerC = ({ player }: PlayerProps) => {
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
    color: determinePostition(player.position as string),
  }

  return (
    <div className="player">
      <img src={player.photo} alt="No Image" className="player-photo" />
      <span>{player.name}</span>
      <span style={styles}>{player.position}</span>
    </div>
  )
}
