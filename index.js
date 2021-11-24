// function distanceFromHqInBlocks(someValue){
//     return someValue = 1
// }
// function distanceFromHqInBlocks(someValue){
//     return someValue = 8
// }

// function distanceFromHqInBlocks(someValue){
//     console.log(someValue)
// }



// function distanceFromHqInFeet(someValue) {
//     distanceFromHqInBlocks(someValue);
   
//     // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
//     // the return value of distanceFromHqInBlocks can then be used to calculate feet
//   }

//   function distanceTravelledInFeet(start, destination) {
//     //returns the number of feet traveled
//   }

//   function calculatesFarePrice(start, destination) {
//     //returns the fare for the customer
//   }

// function distanceFromHqInBlocks(pickup){
//     let numOfBlocks = Math.abs(pickup - 42)
//     return numOfBlocks
// }

// function distanceFromHqInFeet(feet)

function distanceFromHqInBlocks(location){
    if(location === 42){
        return 0
    }
    else{
        return Math.abs(location-42)
    }
}
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(start, destination){
    return Math.abs((destination-start)*264)
}
function calculatesFarePrice(start, destination){
    let fare = (distanceTravelledInFeet(start, destination))
    if (fare<= 400){
        return 0
    }
    else if (fare > 2500){
        return 'cannot travel that far'
    }
    else if (fare > 2000){
        return 25
    }
    else if (fare > 400){
        return (fare - 400) * .02 
    }
}
