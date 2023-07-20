import {navigateToCareers, fillInAllSurveyFields} from '../utils/utils.js'

describe('Careers Page', () => {

  let homePageData
  let careersPageData
  let careersPageDisabilityFormData
  let careersPageFormData
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
  })

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.navigateToPage(homePageData.iodineBaseUrl)
    navigateToCareers(careersPageData)
  })

  it('Navigates to Careers', () => {
    cy.url().should('eq', careersPageData.careersUrl)
  })

  it('Navigates to Software Development Engineer in Test Job Listing', () => {
    cy.clickIframeElements(iFrame, careersPageFormData.slice(0,1))
    cy.getIframeBody(iFrame).should('contains.text', careersPageData.careersJobPageTextValidation)
  })

  it('Clicks Apply to Job Listing', () => {
    cy.clickIframeElements(iFrame, careersPageFormData.slice(0,2))
    cy.getIframeBody(iFrame).should('contains.text', careersPageData.careersSurveyTextValidation)
  })

  it('Agrees to Take Survey', () => {
    cy.clickIframeElements(iFrame, careersPageFormData.slice(0,3))
    cy.getIframeBody(iFrame).should('contains.text', careersPageData.careersSelfIdentifyValidation)
    cy.getIframeBody(iFrame).find(submitButton).should('be.disabled')
  })

  it('Fills in Self-Identity Information', () => {
    cy.clickIframeElements(iFrame,  careersPageFormData.slice(0,6))
    cy.getIframeBody(iFrame).should('contains.text', careersPageData.careersVeteranValidation)
    cy.getIframeBody(iFrame).find(submitButton).should('be.disabled')
  })

  it('Fills in Veteran Status', () => {
    cy.clickIframeElements(iFrame, careersPageFormData.slice(0,8))
    cy.getIframeBody(iFrame).should('contains.text', careersPageData.careersDisablilityValidation)
    cy.getIframeBody(iFrame).find(submitButton).should('be.disabled')
  })

  it('Fills in Disability Status', () => {  
    fillInAllSurveyFields(iFrame, submitButton, careersPageFormData, careersPageDisabilityFormData)
    cy.getIframeBody(iFrame).should('contains.text', careersPageData.careersEnterInformationValidation)
  })
})
