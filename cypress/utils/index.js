import Routes from '../../src/consts/routes'

const TestIdSelector = id => `[data-testid="${id}"]`
const GoTo = (area) => cy.visit(`${Routes[area].url}`)

export {
  TestIdSelector,
  GoTo
}
