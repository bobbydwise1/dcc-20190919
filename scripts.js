/*
This problem was asked by Facebook.

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.
*/

const sortDescending = (yourArray) => {
  let copied = yourArray.slice()
  return copied.sort(function(a,b){
      return a-b
    }
  )
}

const sortAscending = (yourArray) => {
  let copied = yourArray.slice()
  return copied.sort(function(a,b){
      return b-a
    }
  )
}

const makeArrayAbs = (yourArray) => {
  let output = []
  for (element of yourArray) {
    output.push(Math.abs(element))
  }
  return output
}

const findProduct = (yourArray) => {
  let copied = yourArray.slice()
  if (copied.length <= 2) {
    return null
  } else if (copied.length == 3) {
    return copied[0]*copied[1]*copied[2];
  }
  let negative = copied.filter(
    function(element) {
      return element < 0
    }
  )
  negative = sortDescending(negative)
  let positive = copied.filter(
    function(element) {
      return element >= 0
    }
  )
  console.log(positive)
  if ((negative.length >= 2)&&(positive.length >= 1)) {
    let temp1 = negative[1]
    negative = negative[0]*temp1
  } else if ((negative.length == 0)&&(positive.length >= 1)) {
    negative = 0
  } else {
    return negative[negative.length-1]*negative[negative.length-2]*negative[negative.length-3]
  }
  // console.log(negative)
  positive = sortAscending(positive)
  // console.log(positive)
  let first = positive[0]*positive[1]*positive[2]
  let second = positive[0]*negative
  if (first > second) {
    return first
  } else {
    return second
  }
}

// let test1 = [-10,-10,5,2]
// console.log(findProduct(test1))

// let test2 = [-10,-8,-6,5,7,9,11]
// console.log(findProduct(test2))

// let test3 = [-10,-8,-6,-5,-7,-9,-11]
// console.log(findProduct(test3))


$(document).ready(function() {

  $('#form-1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')
    input2 = JSON.parse(input1)
    console.log(input1)
    $('#output-1').text(findProduct(input2))
  })

});
