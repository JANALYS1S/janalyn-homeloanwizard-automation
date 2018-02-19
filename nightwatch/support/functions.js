const selectors = require('./selectors')
const data = require('./data')


const setFieldValue = (field, value, browser) => {
    browser.clearValue(field)
        .setValue(field, value)
        .expect.element(field).value.to.equal(value)
}

module.exports = {
    setFieldValue: setFieldValue,
    /**
     * pageOne: Enters values into Loan and property type query screen
     * @param {string} loanInput This is the key for the loan value
     * @param {string} propertyInput This is the key for the property value
     * @param {object} browser This is the Nightwatch browser controlling object
     */
    pageOne: (loanInput, propertyInput, browser) => {
        browser
            .waitForElementVisible(selectors.dropdowns.select2, 2000, 'Loan and property type query screen loaded.')
            .click(selectors.dropdowns[loanInput])
            .click(selectors.dropdowns[propertyInput])
            .click(selectors.buttons.nextBtn)
    },
    /**
 * pageTwo: Enters values into Property location screen
 * @param {string} cityInput This is the key for the city value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageTwo: (cityInput, browser) => {
        browser
            .waitForElementVisible(selectors.inputFields.city, 2000, 'Property location screen loaded.')
            .setValue(selectors.inputFields.city, cityInput)
            .click(selectors.buttons.nextBtn)
    },
    /**
 * pageThree: Enters values into Property purchase screen
 * @param {string} purchaseTypeInput This is the key for the purchase type value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageThree: (purchaseTypeInput, browser) => {
        browser
            .waitForElementVisible(selectors.buttons.primaryHome, 2000, 'Property purchase screen loaded.')
            .click(selectors.buttons[purchaseTypeInput])
    },
    /**
 * pageFour: Enters values into Property discovered screen
 * @param {string} propertyDiscoveredInput This is the key for the property discovered value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageFour: (propertyDiscoveredInput, browser) => {
        browser
            .waitForElementVisible(selectors.buttons.yesBtn, 2000, 'Property discovered screen loaded.')
            .click(selectors.buttons[propertyDiscoveredInput])
    },
    /**
 * pageFive: Enters values into Agent discovered screen
 * @param {string} agentDiscoveredInput This is the key for the agent discovered value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageFive: (agentDiscoveredInput, browser) => {
        browser
            .waitForElementVisible(selectors.pageIdentifiers.pageFive, 2000, 'Agent discovered screen loaded.')
            .click(selectors.buttons[agentDiscoveredInput])
    },
    /**
 * pageSix: Enters values into Price estimation screen
 * @param {string} priceInput This is the key for the price value
 * @param {string} downInput This is the key for the down payment value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageSix: (priceInput, downInput, browser) => {
        browser
        .waitForElementVisible(selectors.inputFields.price, 2000, 'Price estimation screen loaded.')
            .setValue(selectors.inputFields.price, priceInput)
            .setValue(selectors.inputFields.down, downInput)
            .click(selectors.buttons.nextBtn)
    },
    /**
 * pageSeven: Enters values into Credit score estimation screen
 * @param {string} creditScoreInput This is the key for the credit score value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageSeven: (creditScoreInput, browser) => {
        browser
            .waitForElementVisible(selectors.buttons.excellent, 2000, 'Credit score estimation screen loaded.')
            .click(selectors.buttons[creditScoreInput])
    },
    /**
 * pageEight: Enters values into Bankruptcy/foreclosure info request screen
 * @param {string} bankruptcyForeclosureInput This is the key for the bankruptcy/foreclosure value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageEight: (bankruptcyForeclosureInput, browser) => {
        browser
            .waitForElementVisible(selectors.buttons.neither, 2000, 'Bankruptcy/foreclosure info request screen loaded.')
            .click(selectors.buttons[bankruptcyForeclosureInput])
    },
    /**
 * pageNine: Enters values into Current address request screen
 * @param {string} address1Input This is the key for the first address value
 * @param {string} address2Input This is the key for the second address value
 * @param {string} address3Input This is the key for the third address value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageNine: (address1Input, address2Input, address3Input, browser) => {
        browser
            .waitForElementVisible(selectors.inputFields.address1, 2000, 'Current address request screen loaded.')
            .setValue(selectors.inputFields.address1, address1Input)
            .setValue(selectors.inputFields.address2, address2Input)
            .setValue(selectors.inputFields.address3, address3Input)
            .click(selectors.buttons.nextBtn)
    },
    /**
 * pageTen: Enters values into User information request screen
 * @param {string} firstNameInput This is the key for the first name value
 * @param {string} lastNameInput This is the key for the last name value
 * @param {string} email This is the key for the email value
 * @param {object} browser This is the Nightwatch browser controlling object
 */
    pageTen: (firstNameInput, lastNameInput, emailInput, browser) => {
        browser
            .waitForElementVisible(selectors.inputFields.firstName, 2000, 'User information request screen loaded.')
            .setValue(selectors.inputFields.firstName, firstNameInput)
            .setValue(selectors.inputFields.lastName, lastNameInput)
            .setValue(selectors.inputFields.email, emailInput)
            .click(selectors.buttons.nextBtn)
    }

}