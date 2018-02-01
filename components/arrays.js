/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:arrays" from the command line to test).
 */
class ArrayDrills {
    /**
     * Takes in one parameter (array) and returns it
     */
    identity(arr) {
        return arr;
    }

    /**
     * Takes in two parameters (number and an array in that order), returns
     * the value of the array at the corresponding number index.
     *
     * @example value(2, [0, 1, 3, 2]) -> 3
     */
    value(number, array) {
        if (array[number] !== undefined) {
            return array[number];
        } else {
            return "That isn't a valid index for this array!";
        }
    }

    /**
     * Takes in one parameter (array), returns its length
     */
    length(array) {
        return array.length;
    }

    /**
     * Takes in one parameter (array of numbers), calculates the sum and
     * returns it
     *
     * @example sum([1, 2, 3, -2]) -> 4
     */
    sum(array) {
        let arraySum = 0;
        for (let i = 0; i < array.length; i++) {
            arraySum += array[i];
        }
        return arraySum;
    }

    /**
     * Takes in one parameter (array), returns a new array with values equal to
     * the values in the original array squared.
     *
     * @example square([2, 3, 4]) -> [4, 9, 16]
     */
    square(array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            let squared = Math.pow(array[i], 2);
            newArray.push(squared);
        }
        return newArray;
    }

    /**
     * Takes in two parameters (number and array in that order), returns a new array
     * with values equal to the values in the original array plus the number passed in.
     *
     * @example add(2, [2, 3, 4]) -> [4, 5, 6]
     */
    add(number, array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            let added = array[i] + number;
            newArray.push(added);
        }
        return newArray;
    }

    /**
     * Takes in two parameters (number and array in that order), returns true if the
     * number is found in the array
     *
     * @example contains(3, [1, 3, 2]) -> true
     * @example contains(3, [1, 2, 2]) -> false
     */
    contains(number, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === number) {
                return true;
            }
        }
        return false;
    }

    /**
     * Takes in two parameters (arrays), merges them together and
     * returns a single combined array.
     *
     * @example combine([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 2, 3, 5]
     */
    combine(arrayOne, arrayTwo) {
        for (let i = 0; i < arrayTwo.length; i++) {
            arrayOne.push(arrayTwo[i]);
        }
        return arrayOne;
    }

    /**
     * Takes in one parameter (array), reverses the array and returns.
     *
     * @example reverse([1, 2, 4, 3]) -> [3, 4, 2, 1]
     */
    reverse(array) {
        let newArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    }

    /**
     * Takes in one parameter (array). If numbers, sorts by number,
     * if strings, sorts alphabetically by first letter, else returns
     * an empty array
     *
     * @example sort([1, 2, 4, 3]) -> [1, 2, 3, 4]
     * @example sort(['Apple', 'Pear', 'Baseball', 'Banana']) -> ['Apple', 'Banana', 'Baseball', 'Pear']
     */
    sort(array) {
        if (array.includes(undefined)) {
            let newArray = [];
            return newArray;
        } else if (!array.some(isNaN)) {
            array.sort((a, b) => { return a - b });
        } else {
            array.sort();
        }
        return array;
    }

    /**
     * Takes in two parameters (arrays), returns the union of the two sets
     * in the order they were first seen.
     *
     * @example union([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 5]
     */
    union(arrayOne, arrayTwo) {
        let newArray = [];
        arrayOne.concat(arrayTwo).forEach(element => {
            if (newArray.indexOf(element) == -1) {
                newArray.push(element);
            }
        });
        return newArray;
    }

    /**
     * Takes in two parameters (arrays), returns the intersect of the two sets
     * in the order they were first seen.
     *
     * @example intersect([1, 2, 3, 4], [2, 3, 5]) -> [2, 3]
     */
    intersect(arrayOne, arrayTwo) {
        let newArray = [];
        for (let i = 0; i < arrayOne.length; i++) {
            for (let j = 0; j < arrayTwo.length; j++) {
                if (arrayOne[i] === arrayTwo[j]) {
                    newArray.push(arrayOne[i]);
                }
            }
        }
        return newArray;
    }

    /**
     * Takes in two parameters (arrays), returns an array of the elements in the
     * first parameter that are not in the second in the order they were first
     * seen.
     *
     * @example difference([1, 2, 3, 4], [2, 3, 5]) -> [1]
     */
    difference(arrayOne, arrayTwo) {
        let newArray = [];
        for (let i = 0; i < arrayTwo.length; i++) {
            if (arrayTwo.indexOf(arrayOne[i]) === -1) {
                newArray.push(arrayOne[i]);
            }
        }
        return newArray;
    }

    /**
     * Takes in one parameter (array), returns an array of only defined values
     * (no null, undefined, or NaN values) in the order they were first seen.
     *
     * @example defined([1, NaN, undefined, null, 3, null, 4, 0]) -> [1, 3, 4, 0]
     */
    defined(array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== null && !isNaN(array[i]) || typeof array[i] === "string") {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    /**
     * Takes in two parameters (number then array), returns an array in the same
     * order it was input containing no instances of the number.
     *
     * @example remove(3, [1, 2, 4, 3, 5, 3]) -> [1, 2, 4, 5]
     */
    remove(number, array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== number) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    /**
     * Takes in one parameter (array) and returns a flattened array with
     * values in the order they were first seen
     * (meaning if the input array has other arrays in it, the values
     * of those arrays will be bubbled up to be value first class members
     * of the return array)
     *
     * @example flatten([0, 1, [2], [[3], [4]]]) -> [0, 1, 2, 3, 4]
     */
    flatten(array) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                newArray = [].concat.apply([], array);
            }
        }

        for (let k = 0; k < newArray.length; k++) {
            if (Array.isArray(newArray[k])) {
                newArray = [].concat.apply([], newArray);
            }
        }
        return newArray;
    }

    /**
     * Takes in one parameter (array), which contains values 1-(length+1) of the array
     * with a random number missing. Returns the missing number.
     *
     * For example, if the array's length is 10, it will have numbers 1-11 with
     * 1 number missing.
     *
     * @example findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]) -> 5
     */
    findMissingNumber(array) {
        let length = array.length;
        let total = (length + 1) * (length + 2) / 2

        for (let i = 0; i < length; i++) {
            total -= array[i];
        }
        return total;
    }
}

module.exports = new ArrayDrills();
