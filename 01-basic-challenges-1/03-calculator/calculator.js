const { error } = require("console");

const calculator = (numOne, numTwo, operator) => {
    if(operator == '+') {
        return numOne + numTwo
    }
    else if(operator == '-') {
        return numOne - numTwo;
    }
    else if(operator == '*') {
        return numOne * numTwo;
    }
    else if(operator == '/') {
        return numOne / numTwo;
    }
    else {
        throw new Error('The operator must be one of the following +,-,*,/');
    }

}

module.exports = calculator;
