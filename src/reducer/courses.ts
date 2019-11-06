import { ReduxAction } from '../consts/types'
import { TOGGLE_FAV } from '../consts/actionTypes'

import defaultState, { CourseState } from '../store/module/courses'

export const courses = function (state = <CourseState>defaultState, action: ReduxAction) {
  switch (action.type) {
    case TOGGLE_FAV:
      for (let i = 0; i < state.courseList.length; i++) {
        const element = state.courseList[i]
        if (element.courseId === action.payload) {
          const courseList = [ ...state.courseList ]
          courseList[i].wishListFlag = !courseList[i].wishListFlag
          return { ...state, courseList: [ ...courseList ] }
        }
      }
    default:
      return state
  }
}
