import {navigateToCareers, fillInAllSurveyFields} from '../utils/utils.js'

describe('Full Regression', () => {

    let homePageData
    let careersPageData
    let careersPageDisabilityFormData
    let careersPageFormData
    let regressionData
    let iFrame
    let submitButton

    before(() => {
      cy.fixture('careersPage').then((data) => {
        careersPageData = data;
      })
      cy.fixture('careersPageDisabilityForm').then((data) => {
        careersPageDisabilityFormData = data;
      })
      cy.fixture('careersPageFormClickList').then((data) => {
        careersPageFormData = Object.values(data)
      })
      cy.fixture('globals').then((data) => {
        iFrame = data.iFrame;
        submitButton = data.submitButton;
      })
      cy.fixture('homePage').then((data) => {
        homePageData = data;
      })
      cy.fixture('regression').then((data) => {
        regressionData = data;
      })
    })
  
    
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.navigateToPage(homePageData.iodineBaseUrl)
      navigateToCareers(careersPageData)
    })
  
    it('Completes all Form Entries and then Fills in First Name, Last Name, and invalid email', () => {
      fillInAllSurveyFields(iFrame, submitButton, careersPageFormData, careersPageDisabilityFormData)
      cy.getIframeBody(iFrame).find(regressionData.firstNameField).type(regressionData.firstNameFieldData)
      cy.getIframeBody(iFrame).find(regressionData.lastNameField).type(regressionData.lastNameFieldData)
      cy.getIframeBody(iFrame).find(regressionData.emailField).type(regressionData.emailFieldData)
      cy.clickIframeButton(iFrame, regressionData.submitTextButton)
      cy.getIframeBody(iFrame).find(regressionData.emailField).then(($input) => {
        expect($input[0].validationMessage).to.contains(regressionData.validationString)
      })
    })
  })