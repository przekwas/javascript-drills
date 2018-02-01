/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:strings" from the command line to test).
 */
class StringDrills {
    /**
     * Takes in one parameter (strings) and returns it
     */
    identity(str) {
        return str;
    }

    /**
     * Takes in two parameters (string), concatenate (merges) them together and
     * returns them.
     */
    combine(strOne, strTwo) {
        return strOne.concat(strTwo);
    }

    /**
     * Takes in one parameter (string), returns its length
     */
    length(str) {
        return str.length;
    }

    /**
     * Takes in one parameter (string), returns true if it is empty, false otherwise
     */
    isEmpty(str) {
        if (!str) {
            return true;
        }
        return false;
    }

    /**
     * Takes in one parameter (string), returns an Array of strings that
     * contains only the words in the string (no spaces)
     */
    toArray(str) {
        return str.split(" ");
    }

    /**
     * Takes in two parameters, a string and a number (in that order).
     * Returns a string that only contains the first X number of characters
     * based on the number parameter.
     */
    clip(str, num) {
        return str.substring(0, num);
    }

    /**
     * Takes in one parameter (string), returns a new string with the characters
     * in the reverse order
     */
    reverse(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    /**
     * Takes in two parameters, a string and a number (in that order). Similar to
     * the clip method, only it will only truncate if the string is long enough.
     * All strings that are truncated should have an elipsis ('...') appended to
     * them. The final string should not be longer than the number passed in! If the number passed in is less than or equal to 3,
     * return the string as-is.
     */
    truncate(str, num) {
        if (num <= 3) {
            return str;
        } else if (str.length > num && num > 3) {
            return str.slice(0, (num - 3)) + '...';
        } else if (str.length === num) {
            return str.slice(0, (num - 3)) + '...';
        } else if (str.length <= num) {
            return str;
        }
    }

    /**
     * Takes in one parameter (string), returns a new string that has no leading or
     * trailing spaces.
     */
    strip(str) {
        return str.trim(" ");
    }

    /**
     * Takes in two parameters, a string and a number (in that order). Returns
     * a string that is repeated X number of times depending upon the number
     * passed in.
     */
    repeat(str, num) {
        let newStr = "";
        for (let i = 0; i < num; i++) {
            newStr += str;
        }
        return newStr;
    }

    /**
     * Takes in two paramters (strings), returns true if the second string is
     * contained within the first string, false otherwise.
     */
    contains(strOne, strTwo) {
        if (strOne.includes(strTwo)) {
            return true;
        }
        return false;
    }

    /**
     * Takes in two paramters (strings), returns true if the strings are
     * the same, false otherwise. (case-sensitive)
     */
    isEqual(strOne, strTwo) {
        if (strOne.match(strTwo)) {
            return true;
        }
        return false;
    }

    /**
     * Takes in two paramters (strings), returns true if the strings have the
     * same letters (case-insensitive), false otherwise.
     */
    isSimilar(strOne, strTwo) {
        let stringOne = strOne.toLowerCase();
        let stringTwo = strTwo.toLowerCase();
        if (stringOne === stringTwo) {
            return true;
        }
        return false;
    }
}

module.exports = new StringDrills();
