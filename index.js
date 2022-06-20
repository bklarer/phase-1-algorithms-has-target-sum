function hasTargetSum(array, target) {
  for(let i=0; i<array.length - 1; i++) {
    for(let j=i+1; j<array.length; j++) {
      total = array[i] + array[j]
      console.log(`i = ${array[i]} j = ${array[j]} TOTAL ${total} needs to = ${target}}`)
      if(array[i]+array[j] === target) {
        return true
      } 
    } 
  } return false
}

/* 
  Write the Big O time complexity of your function here O(n^2)
*/

/* 
  Add your pseudocode here
  need to add 2 items in an array and return true when they add up to the target
*/

/*
  Add written explanation of your solution here
  iterated over each item in the array to add 2 positions and check to see if the target equals the 2 positions added
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10)
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
