import { TOGGLE_FAV } from '../consts/actionTypes'
import { ReduxAction } from '../consts/types'

export function toggleFav(courseId: string) {
  return <ReduxAction>{
    type: TOGGLE_FAV,
    payload: courseId
  }
}
