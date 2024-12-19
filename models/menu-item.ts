import type { Action } from '~/models/action'

export type MenuItem = {
  title: string
  to: string
  permissions?: Action[]
}
