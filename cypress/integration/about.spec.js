import TestIds from '../../src/consts/testids'
import { TestIdSelector as s, GoTo } from '../utils'
import { cyan } from '@material-ui/core/colors';

describe('About', () => {
  it('Navigate About', () => {
    GoTo('About')
    cy.get(s(TestIds.app.about))
  })
})
