import "../compCSS/player.css"
export const Player = ({ ...props }) => {
  return (
    <div className="player">
      <img src={props.player.photo} alt="No Image" className="player-photo" />
      <span>{props.player.name}</span>
      <span>{props.player.position}</span>
      <span>{props.player.number}</span>
      <span>{props.player.age}</span>
    </div>
  )
}
