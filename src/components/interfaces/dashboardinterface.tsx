export interface ApiInnerData {
  activity_name: string
  attemp_numer: number
  attempt_type: boolean
  consistency: string
  date: string
  leaderboard_rank: number
  level: string
  level_attempt_type: boolean
  name: string
  score: number
}
export interface MyTableProps {
  data: ApiInnerData[]
}
export interface filterBox {
  search: string
  sort: string
}
export interface MySelectorProps {
  setFilters: (n: filterBox) => void
}
