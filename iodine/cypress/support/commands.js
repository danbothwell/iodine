// ***********************************************
// These are custom commands used to reduce
// duplicated code. 
// ***********************************************

Cypress.Commands.add('getIframeBody', (iframe) => {
    // Explicit wait, a big negative. I used the explicit wait in order to not import
    // cypress-iframe
    cy.wait(800)
    return cy.get(iframe).its('0.contentDocument.body').then(cy.wrap)
})

Cypress.Commands.add('clickIframeButton', (iframe, button) => {
    cy.getIframeBody(iframe).find(button).click()
})

Cypress.Commands.add('navigateToPage', (url) => {
    cy.visit(url)
})

Cypress.Commands.add('clickHiddenButtonAndSuppressNewTab', (button) => {
    cy.contains(button).invoke('show').invoke('removeAttr','target').click({ force: true })
})

Cypress.Commands.add('clickIframeElements', (iframe, arrayOfElements) => {
    for (const element of arrayOfElements) {
    cy.getIframeBody(iframe).find(element).click()
    }
})