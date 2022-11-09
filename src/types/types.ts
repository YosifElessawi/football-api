export type Team = {
  id?: number
  name: string
  logo: string
  country: string
}

export type TeamProps = {
  team: Team
}

export type Fixture = {
  fixture: { id?: number | null | undefined; date: string }
  teams: {
    home: { id?: number; name: string; logo: string }
    away: { id?: number; name: string; logo: string }
  }
}

export type FixtureProps = {
  fixture: Fixture
}

export type Player = {
  id?: number
  name: string
  age: number
  number: number
  position: string
  photo: string
}

export type PlayerProps = {
  player: Player
}
