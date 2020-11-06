export interface User {
  uid: string
  displayName: string
  email: string
  password?: string
  photoURL: any
  wins: number
  losses: number
  wonTo: []
  lostTo: []
}
