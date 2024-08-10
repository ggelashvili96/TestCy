describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.europebet.com/ka')
    cy.get('.eb-navigation-link-bar-content > eb-navigation-links > .eb-navigation-links > :nth-child(9) > .eb-navigation-link > .eb-navigation-link-text')
    cy.get('.register-btn > .eb-btn').click()
   })
})