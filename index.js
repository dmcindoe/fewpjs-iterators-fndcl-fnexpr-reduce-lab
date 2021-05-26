const batteryBatches = [4, 5, 3, 4, 4, 6, 5]

const totalBatteries = batteryBatches.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);
  
  const product = array.reduce((accumulator, element) => {
    return accumulator * element;
  }, 1);

  
//var monthsById = months.reduce((byId, month) => byId[month.Id] = month, {}); 
//var months = [ { Id: 1 }, { Id: 2 }, { Id: 3 } ];


//const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ 
  //  return element * 2 + accumulator})

//const reducer = (accumulator, currentValue) 
// => console.log(array1.reduce(reducer));