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

const findProduct = (yourArray) => {
  if (yourArray.length <= 2) {
    return null
  } else if (yourArray.length == 3) {
    return yourArray[0]*yourArray[1]*yourArray[2];
  }
  let negative = yourArray.filter(
    function(element) {
      return element < 0
    }
  )
  console.log(negative)
  let positive = yourArray.filter(
    function(element) {
      return element >= 0
    }
  )
  console.log(positive)
}

let test1 = [-10,-10,5,2]
console.log(findProduct(test1))

$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')
    input2 = JSON.parse(input1)
    console.log(input1)
    $('#output-1').text(spiral(input2))
  })

});
