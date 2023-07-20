/// <reference types="cypress" />

/**
 * Navigates to the careers page by clicking the hover career element. 
 * @param  {Object} careersBasePageText The career element to click when doing the hover over compajy. 
 * @return None
 */
export function navigateToCareers( {careersBasePageText} ) {
    cy.clickHiddenButtonAndSuppressNewTab(careersBasePageText)
  }

/**
 * Fills in all survey fields
 * @param  {String} iFrame              The iframe of the application
 * @param  {String} submitButton        The Submit button element
 * @param  {Object} careersPageFormData The list of all elements needed to iterate over the various forms. 
 */
export function fillInAllSurveyFields(iFrame, submitButton, careersPageFormData, {nameField, nameFieldData, dateField, dateFieldData}){
    cy.clickIframeElements(iFrame, careersPageFormData)
    cy.getIframeBody(iFrame).find(nameField).type(nameFieldData)
    cy.getIframeBody(iFrame).find(dateField).type(dateFieldData)
    cy.clickIframeButton(iFrame, submitButton)
}