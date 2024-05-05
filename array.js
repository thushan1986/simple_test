const numbers = [1,2,3,4,5]

console.log(numbers)

numbers.forEach(multiplyValues)

function multiplyValues(value, index, array){
    //console.log(value, index ,array[index])
    array[index] = value * 2

}

console.log(numbers)

