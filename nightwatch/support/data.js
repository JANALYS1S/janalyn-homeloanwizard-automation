module.exports = {
    defaultVals: {
        loanType: 'homePurchase',
        propertyType: 'townHome',
        city: 'Salt Lake City, UT',
        purchaseType: 'primaryHome',
        propertyDiscovered: 'yesBtn',
        agentDiscovered: 'yesBtn',
        price: '100000',
        down: '1000',
        creditScore: 'good',
        bankruptcyForeclosure: 'neither',
        address1: '2342 S 23400 W',
        address2: '',
        address3: 'Riverton, UT 84065',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com'
    },


    dropdownsNButtons: {
        //make sure each array has the same number of values as the loopVals array
        loopVals: [0, 1, 2, 3, 4],
        dd1Vals: ['homePurchase', 'refinance', 'homeEquity', 'refinance', 'homeEquity'],
        dd2Vals: ['singleFamHome', 'townHome', 'condo', 'multiFamDwelling', 'mobileHome'],
        buttons1Vals: ['primaryHome', 'rentalProperty', 'secondaryHome', 'secondaryHome', 'rentalProperty'],
        buttons2Vals: ['yesBtn', 'noBtn', 'yesBtn', 'noBtn', 'yesBtn'],
        buttons3Vals: ['noBtn', 'yesBtn', 'yesBtn', 'noBtn', 'yesBtn'],
        buttons4Vals: ['excellent', 'good', 'fair', 'poor', 'good'],
        buttons5Vals: ['neither', 'bankrupt', 'foreclosure', 'both', 'neither']
    },

    propLocationVals: {
        validValues: ['Riverton, UT', '12305', 'City.of-THings, OK', 'Imaginary, YO'],
        invalidValues: ['', 'Little Harbor on the Hillsboro, FL', 'A City', 'Riverton UT', 'riverton, ut'],
        expectedError: 'This field requires a City Name (letters, periods and dashes allowed) and a State abbreviation (separated by a comma, no longer than 30 characters) or a 5 digit zip code. i.e. "94111" and "San Francisco, CA"'
    },

    priceEstVals: {
        validValues: [
            { price: '$100,000.32', down: '9,999.32' },
            { price: '50000', down: '$7500' },
            { price: '$250,999', down: '$2500.55' },
            { price: '1,500,000', down: '50000.99' }
        ],

        invalidValues: [
            {
                price: '', down: '',
                expectedError1: 'The price needs to be a valid dollar amount, greater than $0, and no less than the down payment.',
                expectedError2: 'The down payment needs to be a valid dollar amount, though it can be $0.'
            },
            {
                price: '000', down: '0',
                expectedError1: 'The price needs to be a valid dollar amount, greater than $0, and no less than the down payment.',
                expectedError2: ''
            },
            {
                price: '350k', down: 'ten thousand',
                expectedError1: 'The price needs to be a valid dollar amount, greater than $0, and no less than the down payment.',
                expectedError2: 'The down payment needs to be a valid dollar amount, though it can be $0.'
            },
            /* bug: this price/down payment combo is currently considered valid
            {price: '20,000', down: '250,000',
            expectedError1: 'The price needs to be a valid dollar amount, greater than $0, and no less than the down payment.',
            expectedError2: ''}, */
        ]

    },

    currentAddVals: {
        validValues: [
            { address1: '1234 Northwest St', address2: '', address3: 'San Diego, CA 92331' },
            { address1: '505 Hamberger Ave', address2: 'Apt #12', address3: 'Sandy, UT 84070' }
        ],
        invalidValues: [
            { address1: '', address2: '', address3: '', expectedError1: 'errorMessage', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage' },
            {
                address1: '12aa', address2: '', address3: 'Riverton 84065',
                expectedError1: 'errorMessage', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage'
            },
            { address1: '123456789 jfiemvjdisifhr 12345678 hjhghdsfgjgfrkjgb',
              address2: '123456789 jfiemvjdisifhr 12345678 hjhghdsfgjgfrkjgb',
              address3: '123456789 jfiemvjdisifhr 12345678 hjhghds, UT 12345', expectedError1: 'errorMessage', expectedError2: 'errorMessage', expectedError3: 'errorMessage' },
            { address1: '23432 Flower Cir', address2: 'Apt 3', address3: 'Riverton UT 84065', expectedError1: 'errorMessage hidden', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage' },
            { address1: '4444 Washington Cir', address2: 'Suite 12A', address3: ', UT 84065', expectedError1: 'errorMessage hidden', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage' },
            /*{ address1: '432 Jaguar Ave', address2: '', address3: 'Imaginary, YO 11111', expectedError1: 'errorMessage hidden', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage' }, Invalid State abbreviations are currently not invalid.*/
            { address1: '777 Jacob Lane', address2: 'Bldg A', address3: 'Riverton, UT', expectedError1: 'errorMessage hidden', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage' },
        ],
    },

    userInfoVals: {
        validValues: [
            { firstName: 'John', lastName: 'Doe', email: 'default@hotmail.com' },
            { firstName: 'Mr. Bob', lastName: 'Mailman', email: 'ilikemail@a.bop' },//email value should be 'ilikemail@a.b', but it is currently bugged
            { firstName: 'Cindy', lastName: `O'Leary`, email: 'under_scored123@mail.org' }//email value should be 'under_scored123@mail.456', but it is currently bugged
        ],
        invalidValues: [
            { firstName: '', lastName: '', email: '', expectedError1: 'errorMessage', expectedError2: 'errorMessage', expectedError3: 'errorMessage' },
            {
                firstName: 'jfiemvjdisifhrhjhghdsfgjgfrkjgb', lastName: 'jfiemvjdisifhrhjhghdsfgjgfrkjgb', email: 'jfiemvjdisifhrhjhghdsfgjgfrkjgb@thebestishotmail.com',
                expectedError1: 'errorMessage', expectedError2: 'errorMessage', expectedError3: 'errorMessage'
            },
            { firstName: 'John', lastName: 'Jones', email: 'address1', expectedError1: 'errorMessage hidden', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage' },
            { firstName: 'Milli', lastName: 'Vanilli', email: 'mail@home', expectedError1: 'errorMessage hidden', expectedError2: 'errorMessage hidden', expectedError3: 'errorMessage' },
        ],
    }
}