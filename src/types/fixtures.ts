export type Fixtures = {
  fixture: { id?: number | null | undefined; date: string | any[] }
  teams: {
    home: { id?: number; name: string; logo: string }
    away: { id?: number; name: string; logo: string }
  }
}
