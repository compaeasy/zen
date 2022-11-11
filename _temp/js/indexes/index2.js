
// const getSum = (x = 0, y = 0) => {
//   if (typeof x === 'number' && typeof y === 'number') {
//     return x + y 
//   }

//   return 'Invalid input!'
// }

const getSum = (firstNumber = 0, secondNumber = 0) => {
  return firstNumber + secondNumber
}

console.log(getSum(10, 5)) // 15
console.log(getSum()) // 0