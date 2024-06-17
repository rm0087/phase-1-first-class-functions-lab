const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
};

const returnLastTwoDrivers = function(array){
    let arrayLength = array.length;
    return array.slice(arrayLength-2,arrayLength)
}

let selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers,returnLastTwoDrivers);

function createFareMultiplier(mult){
    return function(){}
}

