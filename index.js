const returnFirstTwoDrivers = function (drivers){return (drivers.slice(0, 2))}

const returnLastTwoDrivers = function (drivers){return (drivers.slice(2, 4))}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num1){return (fare) => num1 * num1}

const fareDoubler = function (createFareMultiplier){return createFareMultiplier * 2}

const fareTripler = function (createFareMultiplier){return createFareMultiplier * 3}

function selectDifferentDrivers(drivers, selectingDrivers){return selectingDrivers(drivers)}









