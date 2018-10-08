// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
    return function(sum) {
        return sum * num
    }
}

const fareDoubler = createFareMultiplier(2)


const fareTripler = function(num) {
    return num * 3
}


const fetchSpecifiedDrivers = function (array, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array)
}