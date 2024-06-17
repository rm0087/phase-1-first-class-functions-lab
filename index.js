const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
};

const returnLastTwoDrivers = function(array){
    let arrayLength = array.length;
    return array.slice(arrayLength-2,arrayLength)
}

let selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers,returnLastTwoDrivers);


const createFareMultiplier = function(multiplier) {
    const fareMultiplier = function(fare){ 
      return (multiplier * fare);
    }
    return fareMultiplier;
}

const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return fare * 3
}

const selectDifferentDrivers = function(drivers, cb){
    return cb(drivers);
}