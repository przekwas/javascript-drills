/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:numbers" from the command line to test).
 */
class NumberDrills {
    /**
     * Takes in one parameter (number) and returns it
     */
    identity(num) {
        return num;
    }

    /**
     * Takes in two parameters, adds them, and returns the result
     */
    add(numOne, numTwo) {
        return numOne + numTwo;
    }

    /**
     * Takes in two parameters, subtracts them, and returns the result
     */
    subtract(numOne, numTwo) {
        return numOne - numTwo;
    }

    /**
     * Takes in two parameters, multiplies them, and returns the result
     */
    multiply(numOne, numTwo) {
        return numOne * numTwo;
    }

    /**
     * Takes in two parameters, divides them, and returns the result
     */
    divide(numOne, numTwo) {
        return numOne / numTwo;
    }

    /**
     * Takes in two parameters, returns the result of the modulus
     */
    mod(numOne, numTwo) {
        return numOne % numTwo;
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * greater than the second, false otherwise.
     */
    isGreater(numOne, numTwo) {
        if (numOne > numTwo) {
            return true;
        }
        return false;
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * less than the second, false otherwise.
     */
    isLess(numOne, numTwo) {
        if (numOne < numTwo) {
            return true;
        }
        return false;
    }

    /**
     * Takes in one parameter, returns true if it is even, false otherwise.
     */
    isEven(num) {
        if (num % 2 === 0) {
            return true;
        }
        return false;
    }

    /**
     * Takes in one parameter, returns true if it is odd, false otherwise.
     */
    isOdd(num) {
        if (num % 2 !== 0) {
            return true;
        }
        return false;
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * evenly divisible by the second.
     */
    isDivisibleBy(numOne, numTwo) {
        if (numOne % numTwo === 0) {
            return true;
        }
        return false;
    }
}

module.exports = new NumberDrills();
