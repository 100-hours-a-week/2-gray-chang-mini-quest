//1번 퀘스트
function test() {
    console.log("start")
    console.log("processing")
    console.log("end")
}

//2번 퀘스트
function async() {
    setTimeout(()=>{
        console.log("Async Operation Complete")
    }, 1000)
}

console.log("start")
async()
console.log("end")

/*
setTimeout 메서드를 적용한 함수는 왜 늦게 출력되는가?
먼저 첫번째 문장(console.log("start"))를 실행시킨 후 async함수를 실행시킨다.
그런데 async함수는 setTimeout 메서드를 실행시키고, 콜백함수를 인자로 받는다.
이 콜백함수의 제어권은 async에 있고, 실행과 동시에 1000ms를 기다리게 되고 그와 동시에 async의 실행은 종료된 것으로 간주된다.
-> 더 정확히 말하면, 콜백함수는 1000ms 뒤에야 task queue에 들어가게 됨
setTimeout은 비동기 함수이므로 함수가 종료됨을 기다리지 않고 end가 먼저 출력됨
1000ms가 지나면 드디어 콜백의 로그가 출력되게 되는 것이다.
*/