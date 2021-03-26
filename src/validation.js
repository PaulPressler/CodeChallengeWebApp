/** Returns if the quote fields are valid. Alerts user of any errors. */
export const ValidateFields = (ages, currency, startDate, endDate) => {
    const agesArray = ages.split(',').map(Number).filter(value => !Number.isNaN(value) && value !== 0);

    // Check ages array for content
    if(agesArray.length === 0) {
        alert('Please enter a comma separated list of ages. ex. "52,48,19"')
    }
    // Check ages array for ages out of range
    else if(agesArray.filter(value => (value < 18 || value > 70)).length > 0) {
        alert('Please only enter ages between 18 and 70.')
    }
    // Check that currency has a length of 3
    else if(currency.length !== 3) {
        alert('Please enter a 3 character currency code in ISO 4217 format.')
    }
    // Check that currency is alpha
    else if(!new RegExp(/^[a-z]+$/i).test(currency)) {
        alert('Currency must only contain alpha characters, A-Z.')
    }
    // Check start date is valid
    else if (!startDate) {
        alert('Please enter a valid start date.')
    }
    // Check end date is valid
    else if (!endDate) {
        alert('Please enter a valid end date.')
    }
    // fields are valid. send request
    else {
        return true
    }
    return false
}