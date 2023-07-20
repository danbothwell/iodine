# Iodine LLC Takehome
# Authored by Daniel Bothwell


This is a simple Cypress Test Suite running 3 specs. There are basic tests that would be needed in a regression to verify correctness. 

The homepage is tested for elements to make sure it's available and correct.
The career page is tested in the same way. In addition, each individual form in the iframe is broken 
into it's own test in order to check for correctness. 
1. Navigates to Software Development Engineer in Test Job Listing
2. Clicks Apply to Job Listing
3. Agrees to Take Survey
4. Fills in Self-Identity Information
5. Fills in Veteran Status
6. Fills in Disability Status

The overall regression test covers all of these elements, and then checks for the invalid email message popup. 

## What is included
There are 4 spec files included:
iodine_career_page.cy.js
iodine_homepage.cy.js
iodine_regression.cy.js
run_all.cy.js

run_all.cy.js will run the other 3 spec files. 
iodine_regression.cy.js will run just the full regression test. 


## Execution
1. Clone repository
2. install cypress
    2.1 npm install cypress --save-dev
3. navigate to the root of the repo (iodine)
4. Run with one of the commands
    1. npx cypress run --spec "cypress/e2e/run_all.cy.js"
    2. npx cypress run --spec "cypress/e2e/run_all.cy.js" --browser chrome
    3. npx cypress run --spec "cypress/e2e/regression.cy.js" 
    4. npx cypress open, then follow propmt to run through GUI

## Results
 Running:  run_all.cy.js                                                                   (1 of 1)


  Home Page
    √ Verifies Iodine Software is Up (8293ms)

  Careers Page
    √ Navigates to Careers (6514ms)
    √ Navigates to Software Development Engineer in Test Job Listing (10132ms)
    √ Clicks Apply to Job Listing (15548ms)
    √ Agrees to Take Survey (12067ms)
    √ Fills in Self-Identity Information (13777ms)
    √ Fills in Veteran Status (16723ms)
    √ Fills in Disability Status (16885ms)

  Full Regression
    √ Completes all Form Entries and then Fills in First Name, Last Name, and invalid email (22604ms)


  9 passing (2m)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        9                                                                                │
  │ Passing:      9                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 minutes, 4 seconds                                                             │
  │ Spec Ran:     run_all.cy.js                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF
  -  Finished compressing: 5 seconds

  -  Video output: C:\Users\danie\Documents\iodine\cypress\videos\run_all.cy.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  run_all.cy.js                            02:04        9        9        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        02:04        9        9        -        -        -
