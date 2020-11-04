export interface User {
  uid: number
  displayName: string
  email: string
  password: string
  photoURL: any
  wins: number
  loses: number
  wonTo: []
  lostTo: []
}
