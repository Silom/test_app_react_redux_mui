import TestIds from '../../src/consts/testids'

import { TestIdSelector as s, GoTo } from '../utils'

describe('Dashboard', () => {
  it('Navigate Dashboard', () => {
    GoTo('Dashboard')
    cy.get(s(TestIds.app.dashboard))
  })

  it('I can see a list of courses', () => {
    cy.get(s(TestIds.courseList.list)).find(s(TestIds.courseList.entry))
  })

  it('I can click the star icon and see a massage', () => {
    cy.get(s(TestIds.courseList.starIcon)).first().click()
    cy.get('body').find(s(TestIds.app.notification))
  })
})
