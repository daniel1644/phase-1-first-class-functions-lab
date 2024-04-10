// Code your solution in this file!

const returnFirstTwoDrivers = (scuberDrivers) => {
    return scuberDrivers.slice(0, 2);
  };
  // Test the function
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Antonia', 'Nuru']



  const returnLastTwoDrivers = (scuberDrivers) => {
    const lastIndex = scuberDrivers.length - 1;
    return scuberDrivers.slice(lastIndex - 1, lastIndex + 1);
  };
  // Test the function
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Amari', 'Mo']



  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// Test the functions in the selectingDrivers array
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Antonia', 'Nuru']
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Amari', 'Mo']


const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier;
    };
  };
  // Test the createFareMultiplier function
  const quadrupleFare = createFareMultiplier(4);
  console.log(quadrupleFare(100)); // => 400
  
  const doubleFare = createFareMultiplier(2);
  console.log(doubleFare(100)); // => 200




  const fareDoubler = createFareMultiplier(2);
  // Test the fareDoubler function
  console.log(fareDoubler(100)); // => 200



  const fareTripler = createFareMultiplier(3);
  // Test the fareTripler function
  console.log(fareTripler(100)); // Output: 300


  const selectDifferentDrivers = (drivers, selectorFunction) => {
    return selectorFunction(drivers);
  };
  // Example usage:
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const selectedDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(selectedDrivers); // ['Antonia', 'Nuru']

const selectedDrivers2 = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(selectedDrivers2); // ['Amari', 'Mo']

