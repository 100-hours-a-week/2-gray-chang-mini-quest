const array = [1,2,3,4,5]

//1번 퀘스트
const sumArray = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator+currentValue)
}
const sum = sumArray(array) 
console.log("sum : " + sum)

//2번 퀘스트
const multiply = (array) => {
    return array.map((x) => x*2)
}

const array2 = multiply(array)
console.log(array2)