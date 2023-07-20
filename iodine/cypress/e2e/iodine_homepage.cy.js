import {navigateToCareers, fillInAllSurveyFields} from '../utils/utils.js'

describe('Home Page', () => {
  let homePageData
  before(() => {
    cy.fixture('homePage').then((data) => {
      homePageData = data;
    })
  })
  
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  it('Verifies Iodine Software is Up', () => {
    cy.navigateToPage(homePageData.iodineBaseUrl)
    cy.get(homePageData.logoDark).should('contains.text', homePageData.logoText);
  })
})