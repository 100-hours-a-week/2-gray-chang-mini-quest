//1번 퀘스트
function createCount(){
    let count = 0;

    function increment(){
        count++
        console.log(count)
    }
    function decreament(){
        count--
        console.log(count)
    }
    function getCount(){
        console.log(count)
        return count
    }

    return {increment, decreament, getCount}
}

const counter = createCount()
counter.increment()
counter.increment()
counter.decreament()

//2번 퀘스트
function messageMaker(string){

    function makeMessage(string2){
        return string+string2
    }

    return makeMessage
}

const message = messageMaker("Hello ")
console.log(message("World!"))