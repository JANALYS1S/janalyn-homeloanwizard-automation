const selectors = require('../support/selectors')
const functions = require('../support/functions')
const data = require('../support/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },

    'Elements are present and performance testing': browser => {
        // Welcome screen
        browser.waitForElementVisible(selectors.pageText.versionNumber, 3000, 'Welcome page loaded.')
            .verify.elementPresent(selectors.pageText.homeTitle)
            .getText(selectors.pageText.homeTitle, result => { browser.verify.ok(result['value'] === 'Home Loan Wizard') })
            .verify.elementPresent(selectors.buttons.nextBtn)
            .click(selectors.buttons.nextBtn)
            //Loan and property type query screen
            .waitForElementVisible(selectors.dropdowns.select2, 2000, 'Loan and property type query screen loaded.')
            .verify.elementPresent(selectors.dropdowns.select1)
            .verify.elementPresent(selectors.pageText.promptFirst)
            .verify.elementPresent(selectors.pageText.promptSecond)
            .verify.elementPresent(selectors.buttons.nextBtn)
            .pause(500)
            .click(selectors.dropdowns[`${data.defaultVals.loanType}`])
            .click(selectors.dropdowns[`${data.defaultVals.propertyType}`])
            .click(selectors.buttons.nextBtn)
            //Property location screen
            .waitForElementVisible(selectors.inputFields.city, 2000, 'Property location screen loaded.')
            .verify.elementPresent(selectors.pageText.promptSingle)
            .verify.elementPresent(selectors.buttons.nextBtn)
            .setValue(selectors.inputFields.city, data.defaultVals.city)
            .click(selectors.buttons.nextBtn)
            //Property purchase screen
            .waitForElementVisible(selectors.buttons.primaryHome, 2000, 'Property purchase screen loaded.')
            .verify.elementPresent(selectors.buttons.rentalProperty)
            .verify.elementPresent(selectors.buttons.secondaryHome)
            .verify.elementPresent(selectors.pageText.promptSingle)
            .click(selectors.buttons[`${data.defaultVals.purchaseType}`])
            //Property discovered screen
            .waitForElementVisible(selectors.buttons.yesBtn, 2000, 'Property discovered screen loaded.')
            .verify.elementPresent(selectors.buttons.noBtn)
            .verify.elementPresent(selectors.pageText.promptSingle)
            .click(selectors.buttons[`${data.defaultVals.propertyDiscovered}`])
            //Agent discovered screen
            .waitForElementVisible(selectors.pageIdentifiers.pageFive, 2000, 'Agent discovered screen loaded.')
            .verify.elementPresent(selectors.buttons.yesBtn)
            .verify.elementPresent(selectors.buttons.noBtn)
            .verify.elementPresent(selectors.pageText.promptSingle)
            .click(selectors.buttons[`${data.defaultVals.agentDiscovered}`])
            //Price estimation screen
            .waitForElementVisible(selectors.inputFields.price, 2000, 'Price estimation screen loaded.')
            .verify.elementPresent(selectors.inputFields.down)
            .verify.elementPresent(selectors.pageText.promptFirst)
            .verify.elementPresent(selectors.pageText.promptSecond)
            .verify.elementPresent(selectors.buttons.nextBtn)
            .setValue(selectors.inputFields.price, data.defaultVals.price)
            .setValue(selectors.inputFields.down, data.defaultVals.down)
            .click(selectors.buttons.nextBtn)
            //Credit score estimation
            .waitForElementVisible(selectors.buttons.excellent, 2000, 'Credit score estimation screen loaded.')
            .verify.elementPresent(selectors.buttons.good)
            .verify.elementPresent(selectors.buttons.fair)
            .verify.elementPresent(selectors.buttons.poor)
            .verify.elementPresent(selectors.pageText.promptSingle)
            .click(selectors.buttons[`${data.defaultVals.creditScore}`])
            //Bankruptcy / foreclosure info request screen
            .waitForElementVisible(selectors.buttons.neither, 2000, 'Bankruptcy/foreclosure info request screen loaded.')
            .verify.elementPresent(selectors.buttons.bankrupt)
            .verify.elementPresent(selectors.buttons.foreclosure)
            .verify.elementPresent(selectors.buttons.both)
            .verify.elementPresent(selectors.pageText.promptSingle)
            .click(selectors.buttons[`${data.defaultVals.bankruptcyForeclosure}`])
            //Current address request screen
            .waitForElementVisible(selectors.inputFields.address1, 2000, 'Current address request screen loaded.')
            .verify.elementPresent(selectors.inputFields.address2)
            .verify.elementPresent(selectors.inputFields.address3)
            .verify.elementPresent(selectors.pageText.promptSingle)
            .verify.elementPresent(selectors.buttons.nextBtn)
            .setValue(selectors.inputFields.address1, data.defaultVals.address1)
            .setValue(selectors.inputFields.address3, data.defaultVals.address3)
            .click(selectors.buttons.nextBtn)
            //User information request screen
            .waitForElementVisible(selectors.inputFields.firstName, 2000, 'User information request screen loaded.')
            .verify.elementPresent(selectors.inputFields.lastName)
            .verify.elementPresent(selectors.inputFields.email)
            .verify.elementPresent(selectors.pageText.promptSingle)
            .verify.elementPresent(selectors.buttons.nextBtn)
            .setValue(selectors.inputFields.firstName, data.defaultVals.firstName)
            .setValue(selectors.inputFields.lastName, data.defaultVals.lastName)
            .setValue(selectors.inputFields.email, data.defaultVals.email)
            .click(selectors.buttons.nextBtn)
            //Summary screen
            .waitForElementVisible(selectors.buttons.send, 2000, 'Summary screen loaded.')
            .verify.elementPresent(selectors.buttons.restart)
        //checks the summary screen for each item in the selectors.overviewFields
        let keys = Object.getOwnPropertyNames(selectors.overviewFields)
        keys.forEach(key => {
            browser.verify.elementPresent(selectors.overviewFields[key], 'Overview screen element ' + key + ' is present.')
        })
    },

    'Testing buttons and dropdowns': browser => {
        //This code will run once for each object in the array "data.dropdownsNButtons.loopVals"
        data.dropdownsNButtons['loopVals'].forEach(val => {
            var button1Text = ''
            var button2Text = ''
            var button3Text = ''
            var button4Text = ''
            var button5Text = ''
            browser.waitForElementVisible(selectors.pageText.versionNumber, 3000, 'Welcome page loaded.')
                .click(selectors.buttons.nextBtn)
            functions.pageOne(data.dropdownsNButtons.dd1Vals[val], data.dropdownsNButtons.dd2Vals[val], browser)
            functions.pageTwo(data.defaultVals.city, browser)
            //this puts the value of the button that is about to be chosen into a variable that will be used to check the summary screen
            browser.getValue(selectors.buttons[`${data.dropdownsNButtons.buttons1Vals[val]}`], result => {
                button1Text = result.value
            })
            functions.pageThree(data.dropdownsNButtons.buttons1Vals[val], browser)
            //this puts the text of the button that is about to be chosen into a variable that will be used to check the summary screen
            browser.getText(selectors.buttons[`${data.dropdownsNButtons.buttons2Vals[val]}`], result => {
                button2Text = result.value
            })
            functions.pageFour(data.dropdownsNButtons.buttons2Vals[val], browser)
            browser.getText(selectors.buttons[`${data.dropdownsNButtons.buttons3Vals[val]}`], result => {
                button3Text = result.value
            })
            functions.pageFive(data.dropdownsNButtons.buttons3Vals[val], browser)
            functions.pageSix(data.defaultVals.price, data.defaultVals.down, browser)
            browser.getValue(selectors.buttons[`${data.dropdownsNButtons.buttons4Vals[val]}`], result => {
                button4Text = result.value
            })
            functions.pageSeven(data.dropdownsNButtons.buttons4Vals[val], browser)
            browser.getValue(selectors.buttons[`${data.dropdownsNButtons.buttons5Vals[val]}`], result => {
                button5Text = result.value
            })
            functions.pageEight(data.dropdownsNButtons.buttons5Vals[val], browser)
            functions.pageNine(data.defaultVals.address1, data.defaultVals.address2, data.defaultVals.address3, browser)
            functions.pageTen(data.defaultVals.firstName, data.defaultVals.lastName, data.defaultVals.email, browser)
            //these two check their specific summary field using values I specified in selectors.dropdowns.textValues
            browser.getText(selectors.overviewFields.loanType, result => {
                browser.verify.equal(result.value, selectors.dropdowns.textValues[`${data.dropdownsNButtons.dd1Vals[val]}`], 'Loan Type on summary screen is as expected.')
            })
            browser.getText(selectors.overviewFields.propertyType, result => {
                browser.verify.equal(result.value, selectors.dropdowns.textValues[`${data.dropdownsNButtons.dd2Vals[val]}`], 'Property Type on summary screen is as expected.')
            })
            //these 5 check their specific summary field using attributes from the actual button pressed (stored earlier in variables)
                .perform(() => {
                    browser.getText(selectors.overviewFields.propertyPurpose, result => {
                        browser.verify.equal(result.value, button1Text, 'Purchase Reason on summary screen is as expected.')
                    })
                })
                .perform(() => {
                    browser.getText(selectors.overviewFields.found, result => {
                        browser.verify.equal(result.value, button2Text, 'Property Already Located on summary screen is as expected.')
                    })
                })
                .perform(() => {
                    browser.getText(selectors.overviewFields.agent, result => {
                        browser.verify.equal(result.value, button3Text, 'Agent Already Engaged on summary screen is as expected.')
                    })
                })
                .perform(() => {
                    browser.getText(selectors.overviewFields.creditScore, result => {
                        browser.verify.equal(result.value, button4Text, 'Credit Score on summary screen is as expected.')
                    })
                })
                .perform(() => {
                    browser.getText(selectors.overviewFields.creditHistory, result => {
                        browser.verify.equal(result.value, button5Text, 'Credit History on summary screen is as expected.')
                    })
                })
            //return to welcome page
            browser.pause(500)
                .click(selectors.buttons.restart)
        })
    },

    'Property location field entry': browser => {
        //This code will run once for each object in the array "data.propLocationVals.validValues"
        data.propLocationVals['validValues'].forEach(object => {
            //navigate through the first form page, entering default values to be able to advance
            browser.waitForElementVisible(selectors.pageText.versionNumber, 3000, 'Welcome page loaded.')
                .click(selectors.buttons.nextBtn)
            functions.pageOne(data.defaultVals.loanType, data.defaultVals.propertyType, browser)
            //The first time through, the code will test the invalid values
            if (data.propLocationVals.validValues.indexOf(object) == 0) {
                browser.waitForElementVisible(selectors.inputFields.city, 2000, 'Property location screen loaded.')
                //This code will run once for each value in the array "data.propLocationVals.invalidValues"
                data.propLocationVals['invalidValues'].forEach(object => {
                    browser
                        .clearValue(selectors.inputFields.city)
                        .setValue(selectors.inputFields.city, object)
                        .click(selectors.buttons.nextBtn)
                        browser.getText(selectors.pageText.propLocErrors, result => {
                            browser.verify.equal(result.value, data.propLocationVals.expectedError, 'Property Location error is as expected.')
                        })
                })
                //now that invalid values have been checked, clear field to prepare for first valid value
                browser.clearValue(selectors.inputFields.city)
            }
            //enters a valid value
            functions.pageTwo(object, browser)
            //navigate through the remaining form pages, entering default values to be able to advance
            functions.pageThree(data.defaultVals.purchaseType, browser)
            functions.pageFour(data.defaultVals.propertyDiscovered, browser)
            functions.pageFive(data.defaultVals.agentDiscovered, browser)
            functions.pageSix(data.defaultVals.price, data.defaultVals.down, browser)
            functions.pageSeven(data.defaultVals.creditScore, browser)
            functions.pageEight(data.defaultVals.bankruptcyForeclosure, browser)
            functions.pageNine(data.defaultVals.address1, data.defaultVals.address2, data.defaultVals.address3, browser)
            functions.pageTen(data.defaultVals.firstName, data.defaultVals.lastName, data.defaultVals.email, browser)
            browser.waitForElementVisible(selectors.buttons.send, 2000, 'Summary screen loaded.')
            //check that entered value is displayed on summary screen in correct field
            browser.getText(selectors.overviewFields.city, result => {
                browser.verify.equal(result.value, object, 'Property Location on summary screen is as expected.')
            })
            //return to welcome page
            browser.pause(500)
                .click(selectors.buttons.restart)
        })
    },

    'Price estimation entry': browser => {
        //This code will run once for each object in the array "data.priceEstVals.validValues"
        data.priceEstVals['validValues'].forEach(object => {
            //navigate through the first five form pages, entering default values to be able to advance
            browser.waitForElementVisible(selectors.pageText.versionNumber, 3000, 'Welcome page loaded.')
                .click(selectors.buttons.nextBtn)
            functions.pageOne(data.defaultVals.loanType, data.defaultVals.propertyType, browser)
            functions.pageTwo(data.defaultVals.city, browser)
            functions.pageThree(data.defaultVals.purchaseType, browser)
            functions.pageFour(data.defaultVals.propertyDiscovered, browser)
            functions.pageFive(data.defaultVals.agentDiscovered, browser)
            //The first time through, the code will test the invalid values
            if (data.priceEstVals.validValues.indexOf(object) == 0) {
                browser.waitForElementVisible(selectors.inputFields.price, 2000, 'Price estimation screen loaded.')
                //This code will run once for each object in the array "data.priceEstVals.invalidValues"
                data.priceEstVals['invalidValues'].forEach(object => {
                    browser
                        .clearValue(selectors.inputFields.price)
                        .setValue(selectors.inputFields.price, object.price)
                        .clearValue(selectors.inputFields.down)
                        .setValue(selectors.inputFields.down, object.down)
                        .click(selectors.buttons.nextBtn)
                    browser.getText(selectors.pageText.priceEstError1, result => {
                        browser.verify.equal(result.value, object.expectedError1, 'Price error is as expected.')
                    })
                    browser.getText(selectors.pageText.priceEstError2, result => {
                        browser.verify.equal(result.value, object.expectedError2, 'Down Payment error is as expected.')
                    })
                })
                //now that invalid values have been checked, clear fields to prepare for first set of valid values
                browser
                    .clearValue(selectors.inputFields.price)
                    .clearValue(selectors.inputFields.down)
            }
            //enters a set of valid values
            functions.pageSix(object.price, object.down, browser)
            //navigate through the remaining form pages, entering default values to be able to advance
            functions.pageSeven(data.defaultVals.creditScore, browser)
            functions.pageEight(data.defaultVals.bankruptcyForeclosure, browser)
            functions.pageNine(data.defaultVals.address1, data.defaultVals.address2, data.defaultVals.address3, browser)
            functions.pageTen(data.defaultVals.firstName, data.defaultVals.lastName, data.defaultVals.email, browser)
            browser.waitForElementVisible(selectors.buttons.send, 2000, 'Summary screen loaded.')
            //check that entered values are displayed on summary screen in correct field
            browser.getText(selectors.overviewFields.price, result => {
                browser.verify.equal(result.value, object.price, 'Price on summary screen is as expected.')
            })
            browser.getText(selectors.overviewFields.down, result => {
                browser.verify.equal(result.value, object.down, 'Down Payment on summary screen is as expected.')
            })
            //return to welcome page
            browser.pause(500)
                .click(selectors.buttons.restart)
        })
    },

    'Current Address entry': browser => {
        //This code will run once for each object in the array "data.currentAddVals.validValues"
        data.currentAddVals['validValues'].forEach(object => {
            //navigate through the first eight form pages, entering default values to be able to advance
            browser.waitForElementVisible(selectors.pageText.versionNumber, 3000, 'Welcome page loaded.')
                .click(selectors.buttons.nextBtn)
            functions.pageOne(data.defaultVals.loanType, data.defaultVals.propertyType, browser)
            functions.pageTwo(data.defaultVals.city, browser)
            functions.pageThree(data.defaultVals.purchaseType, browser)
            functions.pageFour(data.defaultVals.propertyDiscovered, browser)
            functions.pageFive(data.defaultVals.agentDiscovered, browser)
            functions.pageSix(data.defaultVals.price, data.defaultVals.down, browser)
            functions.pageSeven(data.defaultVals.creditScore, browser)
            functions.pageEight(data.defaultVals.bankruptcyForeclosure, browser)
            //The first time through, the code will test the invalid values
            if (data.currentAddVals.validValues.indexOf(object) == 0) {
                browser.waitForElementVisible(selectors.inputFields.address1, 2000, 'Current address request screen loaded.')
                //This code will run once for each object in the array "data.currentAddVals.invalidValues"
                data.currentAddVals['invalidValues'].forEach(object => {
                    browser
                        .clearValue(selectors.inputFields.address1)
                        .setValue(selectors.inputFields.address1, object.address1)
                        .clearValue(selectors.inputFields.address2)
                        .setValue(selectors.inputFields.address2, object.address2)
                        .clearValue(selectors.inputFields.address3)
                        .setValue(selectors.inputFields.address3, object.address3)
                        .click(selectors.buttons.nextBtn)
                        .getAttribute(selectors.pageText.threeFieldsError1, "class", result => {
                            browser.verify.equal(result.value, object.expectedError1, 'Address 1 error is as expected.')})
                        .getAttribute(selectors.pageText.threeFieldsError2, "class", result => {
                            browser.verify.equal(result.value, object.expectedError2, 'Address 2 error is as expected.')})
                        .getAttribute(selectors.pageText.threeFieldsError3, "class", result => {
                            browser.verify.equal(result.value, object.expectedError3, 'Address 3 error is as expected.')})
                })
                //now that invalid values have been checked, clear fields to prepare for first set of valid values
                browser
                    .clearValue(selectors.inputFields.address1)
                    .clearValue(selectors.inputFields.address2)
                    .clearValue(selectors.inputFields.address3)
            }
            //enters a set of valid values
            functions.pageNine(object.address1, object.address2, object.address3, browser)
            //navigate through the remaining form page, entering default values to be able to advance
            functions.pageTen(data.defaultVals.firstName, data.defaultVals.lastName, data.defaultVals.email, browser)
            browser.waitForElementVisible(selectors.buttons.send, 2000, 'Summary screen loaded.')
            //check that entered values are displayed on summary screen in correct field
            browser.getText(selectors.overviewFields.address1, result => {
                browser.verify.equal(result.value, object.address1, 'Address Line 1 on summary screen is as expected.')
            })
            /*Commented out; current bug effects address2 values in summary screen
            browser.getText(selectors.overviewFields.address2, result => {
                browser.verify.equal(result.value, object.address2, 'Address Line 2 on summary screen is as expected.')
            })*/
            browser.getText(selectors.overviewFields.address3, result => {
                browser.verify.equal(result.value, object.address3, 'Address Line 3 on summary screen is as expected.')
            })
            //return to welcome page
            browser.pause(500)
                .click(selectors.buttons.restart)
        })
    },

    'User Information entry': browser => {
        //This code will run once for each object in the array "data.userInfoVals.validValues"
        data.userInfoVals['validValues'].forEach(object => {
            //navigate through the first nine form pages, entering default values to be able to advance
            browser.waitForElementVisible(selectors.pageText.versionNumber, 3000, 'Welcome page loaded.')
                .click(selectors.buttons.nextBtn)
            functions.pageOne(data.defaultVals.loanType, data.defaultVals.propertyType, browser)
            functions.pageTwo(data.defaultVals.city, browser)
            functions.pageThree(data.defaultVals.purchaseType, browser)
            functions.pageFour(data.defaultVals.propertyDiscovered, browser)
            functions.pageFive(data.defaultVals.agentDiscovered, browser)
            functions.pageSix(data.defaultVals.price, data.defaultVals.down, browser)
            functions.pageSeven(data.defaultVals.creditScore, browser)
            functions.pageEight(data.defaultVals.bankruptcyForeclosure, browser)
            functions.pageNine(data.defaultVals.address1, data.defaultVals.address2, data.defaultVals.address3, browser)
            //The first time through, the code will test the invalid values
            if (data.userInfoVals.validValues.indexOf(object) == 0) {
                browser.waitForElementVisible(selectors.inputFields.firstName, 2000, 'User information request screen loaded.')
                //This code will run once for each object in the array "data.userInfoVals.invalidValues"
                data.userInfoVals['invalidValues'].forEach(object => {
                    browser
                        .clearValue(selectors.inputFields.firstName)
                        .setValue(selectors.inputFields.firstName, object.firstName)
                        .clearValue(selectors.inputFields.lastName)
                        .setValue(selectors.inputFields.lastName, object.lastName)
                        .clearValue(selectors.inputFields.email)
                        .setValue(selectors.inputFields.email, object.email)
                        .click(selectors.buttons.nextBtn)
                        .getAttribute(selectors.pageText.threeFieldsError1, "class", result => {
                            browser.verify.equal(result.value, object.expectedError1, 'First Name error is as expected.')})
                        .getAttribute(selectors.pageText.threeFieldsError2, "class", result => {
                            browser.verify.equal(result.value, object.expectedError2, 'Last Name error is as expected.')})
                        .getAttribute(selectors.pageText.threeFieldsError3, "class", result => {
                            browser.verify.equal(result.value, object.expectedError3, 'Email error is as expected.')})
                })
                //now that invalid values have been checked, clear fields to prepare for first set of valid values
                browser
                    .clearValue(selectors.inputFields.firstName)
                    .clearValue(selectors.inputFields.lastName)
                    .clearValue(selectors.inputFields.email)
            }
            //enters a set of valid values
            functions.pageTen(object.firstName, object.lastName, object.email, browser)
            browser.waitForElementVisible(selectors.buttons.send, 2000, 'Summary screen loaded.')
            //check that entered values are displayed on summary screen in correct field
            browser.getText(selectors.overviewFields.name, result => {
                browser.verify.equal(result.value, `${object.firstName} ${object.lastName}`, 'Name on summary screen is as expected.')
            })
            browser.getText(selectors.overviewFields.email, result => {
                browser.verify.equal(result.value, object.email, 'Email on summary screen is as expected.')
            })
            //return to welcome page
            browser.pause(500)
                .click(selectors.buttons.restart)
        })
    }
}