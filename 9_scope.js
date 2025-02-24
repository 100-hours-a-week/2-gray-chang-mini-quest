//1번 퀘스트
let temperature = 25;
console.log(temperature)
temperature = 30
console.log(temperature)

//2번 퀘스트
if (true){
    let isRaining = true
}
console.log(isRaining)
/*
함수 내부에서 let 변수를 선언하고 외부에서 값을 사용할 수 없다.
그 이유는 let, const는 함수 스코프를 가지게 되므로 함수 외부에서는 접근할 수 없기 때문이다.
해결하기 위해서는 변수를 var로 바꾸는 방법과, 함수 외부에 let isRaing;처럼 전역으로 선언하는 방법, 그리고 클로져를 사용하는 방법이 있다.
*/