//1번 퀘스트
function add(a,b) {
    return a+b;
}

const sum = add(2,3)
console.log("sum : " + sum)

//2번 퀘스트
const sumArray = (array) => {
    let sum = 0
    for(const i of array) {
        sum+=i
    } return sum
}

const total = sumArray([1,2,3,4,5])
console.log("total : " + total)