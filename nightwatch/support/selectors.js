module.exports = {
    pageText: {
        homeTitle: 'h1[name="promptText"]',
        promptSingle: 'p[name="promptText"]',
        promptFirst: 'p[name="promptText1"]',
        promptSecond: 'p[name="promptText2"]',
        versionNumber: 'h6[name="versionNumber"]',
        propLocErrors: 'p[name="errorMessage"]',
        priceEstError1: 'p[class="errorMessage"]',
        priceEstError2: 'div.vert-align p + p',//Both error message elements on this page are exactly the same. This was the solution I found
        threeFieldsError1: 'li[name="addOneErrorMessage"]',
        threeFieldsError2: 'li[name="addTwoErrorMessage"]',
        threeFieldsError3: 'li[name="addThreeErrorMessage"]'
    },

    inputFields: {
        city: 'input[name="city"]',
        price: 'input[name="price"]',
        down: 'input[name="down"]',
        address1: 'input#addressOne',
        address2: 'input#addressTwo',
        address3: 'input#addressThree',
        firstName: 'input[id="first"]',
        lastName: 'input[id="last"]',
        email: 'input[id="email"]'
    },

    dropdowns: {
        select1: 'select[id="loanTypes"]',
        select2: 'select[id="propertyTypes"]',
        homePurchase: 'select[id = "loanTypes"] option[value="Home Purchase"]',
        refinance: 'select[id = "loanTypes"] option[value="Refinance"]',
        homeEquity: 'select[id = "loanTypes"] option[value="Home Equity"]',
        singleFamHome: 'select[id = "propertyTypes"] option[value="Single Family Home"]',
        townHome: 'select[id = "propertyTypes"] option[value="Town Home"]',
        condo: 'select[id = "propertyTypes"] option[value="Condo"]',
        multiFamDwelling: 'select[id = "propertyTypes"] option[value="Multi Family Dwelling"]',
        mobileHome: 'select[id = "propertyTypes"] option[value="Mobile Home"]',
        textValues: {//I made these when I thought the text on the summary screen for homeEquity would be different from the value of the button (Home Equity Loan/Line of Credit)
            homePurchase: 'Home Purchase',
            refinance: 'Refinance',
            homeEquity: 'Home Equity',
            singleFamHome: 'Single Family Home',
            townHome: 'Town Home',
            condo: 'Condo',
            multiFamDwelling: 'Multi Family Dwelling',
            mobileHome: 'Mobile Home',
        }
    },

    buttons: {
        nextBtn: 'button[name="nextButton"]',
        primaryHome: 'button[value="Primary Home"]',
        rentalProperty: 'button[value="Rental Property"]',
        secondaryHome: 'button[value="Secondary Home"]',
        yesBtn: 'button[name="yesButton"]',
        noBtn: 'button[name="noButton"]',
        excellent: 'button[value="Excellent"]',
        good: 'button[value="Good"]',
        fair: 'button[value="Fair"]',
        poor: 'button[value="Poor"]',
        neither: 'button[value="Has not been in bankruptcy or foreclosure"]',
        bankrupt: 'button[value="Has had bankruptcy"]',
        foreclosure: 'button[value="Has had a foreclosure"]',
        both: 'button[value="Has had both a foreclosure and a bankruptcy"]',
        send: 'button[name="sendButton"]',
        restart: 'button[name="restartButton"]'
    },

    overviewFields: {
        name: 'p[class="name p2"]',
        email: 'p[class="email p2"]',
        loanType: 'p[class="loanType p2"]',
        propertyType: 'p[class="propertyType p2"]',
        city: 'p[class="city p2"]',
        propertyPurpose: 'p[class="propertyPurpose p2"]',
        found: 'p[class="found p2"]',
        agent: 'p[class="agent p2"]',
        price: 'p[class="price p2"]',
        down: 'p[class="downPayment p2"]',
        creditScore: 'p[class="creditScore p2"]',
        creditHistory: 'p[class="creditHistory p2"]',
        address1: 'span[id="addressOne"]',
        address2: 'span[id="addressTwo"]',
        address3: 'span[id="addressThree"]',
        nameLabel: 'div[name="nameLabel"]',
        emailLabel: 'div[name="emailLabel"]',
        loanTypeLabel: 'div[name="loanTypeLabel"]',
        propertyTypeLabel: 'div[name="propertyTypeLabel"]',
        cityLabel: 'div[name="cityLabel"]',
        propertyPurposeLabel: 'div[name="propertyPurposeLabel"]',
        foundLabel: 'div[name="foundLabel"]',
        agentLabel: 'div[name="agentLabel"]',
        priceLabel: 'div[name="priceLabel"]',
        downPaymentLabel: 'div[name="downPaymentLabel"]',
        creditScoreLabel: 'div + div + div + div + div + div + div + div + div + div + div',//only solution I could find for the fact that these two elements have the same name
        creditHistoryLabel: 'div + div + div + div + div + div + div + div + div + div + div + div',
        addressLabel: 'div[name="addressLabel"]'
    },
    pageIdentifiers: {
        pageFive: 'a[href="#/wSix"]'//this was my idea to distinguish page five from page four, since the Prompt Text and 2 buttons on both have the same names
    }
}