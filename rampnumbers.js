const getRampNum = () => {
  var num = Number(document.getElementById('input').value);
  //initializing the required variables outside of the loops to maintian proper scope
  // numToCheck is the number we are verifying is a ramp number
  // numToCompare is an array created from numToCheck so we can iterate through it with a loop
  let numToCompare = [];
  // As we loop through numToCompare, we push the values to finalNum which we will check against numToCheck, the number we are confirming is a ramp number, once the loop is finished
  let finalNum = [];
  // count is an array of all of the confirmed ramp numbers
  let count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //starting a for loop to count up from 1 to the number passed into the function
  for (i = 1; i <= num; i++) {
    //setting the number to check against to i, which will increase each loop
    numToCheck = i;
    //creating an array from the same number so we can loop through it to check for 'greater than' integers
    numToCompare = Array.from(i.toString()).map(Number);
    //setting the first element of finalNum to the first element of numToCompare so we can properly check the second element against the first
    finalNum = [numToCompare[0]];

    //beginning a second loop that will iterate through the numToCompare array (which is set to i)
    for (j = 0; j <= numToCheck; j++) {
      // if the next element is greater than the current value
      if (numToCompare[j] <= numToCompare[j + 1]) {
        // then push the element to the finalNum array
        finalNum.push(numToCompare[j + 1]);
        // if the next element is smaller break the loop
      } else break;
        // intialize a variable for the number being pushed to the count array        
        let test = finalNum.map(Number).join("");
        // if the resulting number is equal to the number we are checking against, meaning every integer is greater than the last
        if (test == numToCheck) {
        // push the result to the count array
        count.push(test);
        }
    }
  }
  // return the count of ramp numbers
  document.getElementById("output").innerHTML = count.length;
}